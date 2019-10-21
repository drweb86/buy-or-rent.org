import { Component, OnInit } from '@angular/core';
import { CalculatorSettings } from '../models/calculator-settings';
import { CalculatorResultItem } from '../models/calculated-result-item';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private _calculatorService: CalculatorService) { }

  resultItems: CalculatorResultItem[] = [];

  ngOnInit() {
  }

  onCalculate($event: CalculatorSettings): void {
    this.resultItems = this._calculatorService.getResultItems($event);;
  }
}
