import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BackendConnectorService } from './backend-connector.service';
import { BaseHref, ConnectorService } from './connector';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule]
})
export class BackendConnectorModule {
  static forRoot(baseUrl: string): ModuleWithProviders<BackendConnectorModule> {
    return {
      ngModule: BackendConnectorModule,
      providers: [
        { provide: BaseHref, useValue: baseUrl },
        {
          provide: ConnectorService,
          useClass: BackendConnectorService
        }
      ]
    };
  }
}
