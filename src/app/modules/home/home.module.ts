import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarioModule } from 'src/app/shared/components/calendario/calendario.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, CalendarioModule],
})
export class HomeModule {}
