import { Component } from '@angular/core';
import { CalculatorSettings } from '../models/calculator-settings';
import { CalculatorResultItem } from '../models/calculated-result-item';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  constructor(private _calculatorService: CalculatorService) { }

  resultItems: CalculatorResultItem[] = [];

  async onCalculate($event: CalculatorSettings): Promise<void> {
    this.resultItems = [];
    await this.wait();
    this.resultItems = this._calculatorService.getResultItems($event);
  }

  private async wait(): Promise<void> {
    await new Promise<void>(resolve => {
      setTimeout(resolve, 500);
    });
  }
}
