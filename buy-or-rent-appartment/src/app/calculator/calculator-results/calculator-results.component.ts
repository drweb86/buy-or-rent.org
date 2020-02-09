import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CalculatorResultItem } from '../models/calculated-result-item';
import { Label, Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calculator-results.component.html',
  styleUrls: ['./calculator-results.component.scss']
})
export class CalculatorResultsComponent implements OnChanges {
  @Input() resultItems: CalculatorResultItem[];

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Total Income - Renting' },
    { data: [], label: 'Total Income - Buying' },
  ];
  lineChartLabels: Label[] = [];
  lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [pluginAnnotations];

  ngOnChanges(changes: SimpleChanges): void {
    const resultItems = changes.resultItems.currentValue;

    if (resultItems === undefined ||
      resultItems.length === 0) {
      return;
    }

    this.lineChartLabels = resultItems
      .map(z => resultItems.length < 20 ? `Year ${z.YearNo}` : `${z.YearNo}`);

    const newLineChartData = [
      { data: [], label: 'Total Income - Renting' },
      { data: [], label: 'Total Income - Buying' },
    ];
    resultItems.forEach(item => {
      newLineChartData[0].data.push(item.RentIncomeTotal);
      newLineChartData[1].data.push(item.BuyIncomeTotal - item.BuyIncomeRemainingDebt + item.BuyEquityCost);
    });

    this.lineChartData = newLineChartData;
  }
}
