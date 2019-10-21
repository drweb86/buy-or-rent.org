import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [AboutComponent, PrivacyComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent, PrivacyComponent],
})
export class AboutModule { }
