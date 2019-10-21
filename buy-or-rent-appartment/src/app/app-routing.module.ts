import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { PrivacyComponent } from './about/privacy/privacy.component';
import { AboutModule } from './about/about.module';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { CalculatorModule } from './calculator/calculator.module';


const routes: Routes = [
  { path: 'about/info', component: AboutComponent },
  { path: 'about/privacy', component: PrivacyComponent },
  { path: '**', component: CalculatorComponent },
];

@NgModule({
  imports: [
    AboutModule,
    CalculatorModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
