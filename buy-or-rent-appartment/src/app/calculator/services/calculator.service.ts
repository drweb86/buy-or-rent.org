import { Injectable } from '@angular/core';
import { CalculatorSettings } from '../models/calculator-settings';
import { CalculatorResultItem } from '../models/calculated-result-item';

@Injectable()
export class CalculatorService {
    getResultItems(options: CalculatorSettings): CalculatorResultItem[] {
        const rentItems: CalculatorResultItem[] = [];

        const mgMonthlyInterestRate = options.MortgageInterestRate / 100 / 12;
        let appartmentPrice = options.AppartmentCost;
        let mgNumberOfPayments = options.MortgageLoanTerm * 12;
        const mgMonthlyPayment = options.AppartmentCost * mgMonthlyInterestRate * Math.pow(1 + mgMonthlyInterestRate, mgNumberOfPayments) /
            (Math.pow(1 + mgMonthlyInterestRate, mgNumberOfPayments) - 1);

        let investmentsCurrent = 0;
        let buyInvestmentsCurrent = 0;
        for (let i = 0; i < options.PeriodYears; i++) {
            const yearNo = i + 1;

            // Renting

            const howMuchMoneyToInvestPerMonth = options.IncomeForRentAndInvestments - options.AppartmentRent;
            for (let monthN0 = 0; monthN0 < 12; monthN0++) {
                investmentsCurrent += investmentsCurrent * options.InvestmentsPercents / (12 * 100) + howMuchMoneyToInvestPerMonth;
            }

            // Buying

            // 1. Investments

            for (let monthN0 = 0; monthN0 < 12; monthN0++) {
                let buyHowMuchMoneyToInvestPerMonth = options.IncomeForRentAndInvestments;

                if (mgNumberOfPayments > 0) {
                    mgNumberOfPayments--;
                    buyHowMuchMoneyToInvestPerMonth -= mgMonthlyPayment;
                }

                buyInvestmentsCurrent += buyInvestmentsCurrent * options.InvestmentsPercents / (12 * 100) + buyHowMuchMoneyToInvestPerMonth;
            }

            // 2. Equity
            appartmentPrice = (100 + options.AppartmentCostGrowthPercents) * appartmentPrice / 100;

            const rentItem: CalculatorResultItem = {
                YearNo: yearNo,
                RentIncomeTotal: Math.round(investmentsCurrent),
                BuyIncomeTotal: Math.round(buyInvestmentsCurrent),
                BuyIncomeRemainingDebt: Math.round(12 * mgNumberOfPayments * mgMonthlyPayment),
                BuyEquityCost: Math.round(appartmentPrice),
            };

            rentItems.push(rentItem);
        }

        return rentItems;
    }
}
