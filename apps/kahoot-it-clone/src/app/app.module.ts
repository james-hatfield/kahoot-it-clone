import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@kahoot-it-clone/material';
import { environment } from '../environments/environment';
import { BackendConnectorModule } from '@kahoot-it-clone/api/connector/backend-connector';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    BackendConnectorModule.forRoot(environment.baseUrl)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
