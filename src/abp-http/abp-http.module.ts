import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { AbpHttp, AbpHttpConfiguration } from './http/abp-http.service';
import * as api from 'ut-api-js-services';

import { UtilsService } from './http/utils.service';
import { TokenService } from './http/token.service';
import { MessageService } from './http/message.service';
import { LogService } from './http/log.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AbpHttp,
    AbpHttpConfiguration,
    LogService,
    MessageService,
    TokenService,
    UtilsService,
    {provide: Http, useExisting: AbpHttp},

    api.APIS
  ],
  declarations: []
})
export class AbpHttpModule {
}
