import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module';
import {HomeModule} from '../modules/home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HomeModule
  ],
  exports: [MaterialModule, HomeModule]
})
export class SharedModule { }
