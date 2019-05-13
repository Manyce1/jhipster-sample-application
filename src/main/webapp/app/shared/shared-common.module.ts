import { NgModule } from '@angular/core';

import { FirstApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [FirstApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [FirstApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FirstApplicationSharedCommonModule {}
