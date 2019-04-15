import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MscpGovSharedLibsModule, MscpGovSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [MscpGovSharedLibsModule, MscpGovSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [MscpGovSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MscpGovSharedModule {
    static forRoot() {
        return {
            ngModule: MscpGovSharedModule
        };
    }
}
