import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { EnsureModuleLoadedOnGuard } from './ensureModuleLoadedOnceGuard';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class CoreModule extends EnsureModuleLoadedOnGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
