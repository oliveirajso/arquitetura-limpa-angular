import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CalendarioModule } from './components/calendario/calendario.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, CalendarioModule],
  exports: [MaterialModule, CalendarioModule],
})
export class SharedModule {}
