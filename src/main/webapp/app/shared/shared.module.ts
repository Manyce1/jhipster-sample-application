import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirstApplicationSharedLibsModule, FirstApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FirstApplicationSharedLibsModule, FirstApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FirstApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: FirstApplicationSharedModule
    };
  }
}
