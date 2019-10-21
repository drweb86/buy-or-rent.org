import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';
import { AngularAndMaterialModule } from '../angular-and-material/angular-and-material.module';

@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularAndMaterialModule,
  ],
  exports: [
    NavigationMenuComponent,
  ],
})
export class NavigationModule { }
