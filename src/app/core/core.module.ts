import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';
import { EnsureModuleLoadedOnGuard } from './ensureModuleLoadedOnceGuard';


@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule],
  exports: [CalendarComponent],
})
export class CoreModule extends EnsureModuleLoadedOnGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
