import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculatorSettings } from '../models/calculator-settings';

@Component({
  selector: 'app-calculator-settings',
  templateUrl: './calculator-settings.component.html',
  styleUrls: ['./calculator-settings.component.scss']
})
export class CalculatorSettingsComponent implements OnInit {
  @Output() onCalculate: EventEmitter<CalculatorSettings> = new EventEmitter();

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this._formBuilder.group({
      'appartment_cost': [125000, [Validators.required]],
      'mortgate_interest_rate': [12, [Validators.required]],
      'mortgage_loan_term': [10, [Validators.required]],
      'appartment_rent': [640, [Validators.required]],
      'appartment_cost_growth_percents': [4, [Validators.required]],

      'investments_percents': [13, [Validators.required]],
      'income_for_rent_and_investments': [2000, [Validators.required]],
      'period_years': [10, [Validators.required]],
    });
  }

  onSubmit(): void {
    const eventArgs: CalculatorSettings = {
      AppartmentCost: +this.formGroup.controls.appartment_cost.value,
      MortgageInterestRate: +this.formGroup.controls.mortgate_interest_rate.value,
      MortgageLoanTerm: +this.formGroup.controls.mortgage_loan_term.value,
      AppartmentRent: +this.formGroup.controls.appartment_rent.value,
      AppartmentCostGrowthPercents: +this.formGroup.controls.appartment_cost_growth_percents.value,
      InvestmentsPercents: +this.formGroup.controls.investments_percents.value,
      IncomeForRentAndInvestments: +this.formGroup.controls.income_for_rent_and_investments.value,
      PeriodYears: +this.formGroup.controls.period_years.value,
    }

    this.onCalculate.emit(eventArgs);
  }
}
