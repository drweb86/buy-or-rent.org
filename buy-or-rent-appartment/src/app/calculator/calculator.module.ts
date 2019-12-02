import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorSettingsComponent } from './calculator-settings/calculator-settings.component';
import { CalculatorResultsComponent } from './calculator-results/calculator-results.component';
import { AngularAndMaterialModule } from '../angular-and-material/angular-and-material.module';
import { CalculatorService } from './services/calculator.service';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [CalculatorComponent, CalculatorSettingsComponent, CalculatorResultsComponent],
  imports: [
    CommonModule,
    AngularAndMaterialModule,
    ChartsModule,
  ],
  exports: [CalculatorComponent],
  providers: [CalculatorService],
})
export class CalculatorModule { }
