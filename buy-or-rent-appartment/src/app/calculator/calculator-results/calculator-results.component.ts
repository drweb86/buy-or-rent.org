import { Component, OnInit, Output, Input, ViewChild, OnChanges } from '@angular/core';
import { CalculatorResultItem } from '../models/calculated-result-item';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
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

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  ngOnChanges(): void {
    if (this.resultItems === undefined ||
      this.resultItems.length === 0) {
      return;
    }

    this.lineChartLabels = this.resultItems
      .map(z => this.resultItems.length < 20 ? `Year ${z.YearNo}` : `${z.YearNo}`);

    this.lineChartData = [
      { data: [], label: 'Total Income - Renting' },
      { data: [], label: 'Total Income - Buying' },
    ];
    this.resultItems.forEach(item => {
      this.lineChartData[0].data.push(item.RentIncomeTotal);
      this.lineChartData[1].data.push(item.BuyIncomeTotal - item.BuyIncomeRemainingDebt + item.BuyEquityCost);
    });

    this.chart.update();
  }
}
