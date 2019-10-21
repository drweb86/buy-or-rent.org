import { Component, OnInit, Output, Input } from '@angular/core';
import { CalculatorResultItem } from '../models/calculated-result-item';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calculator-results.component.html',
  styleUrls: ['./calculator-results.component.scss']
})
export class CalculatorResultsComponent {
  @Input() resultItems: CalculatorResultItem[];
}
