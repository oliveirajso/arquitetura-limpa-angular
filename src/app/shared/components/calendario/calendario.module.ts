import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CalendarioComponent } from './calendario.component';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [CommonModule],
  exports: [CalendarioComponent],
})
export class CalendarioModule {}
