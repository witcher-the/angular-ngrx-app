import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryService} from './services/in-memory.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {PersonService} from './services/person.service';
import {PartyService} from './services/party.service';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService,
      {delay: 500, dataEncapsulation: false}
    ),
  ],
  providers: [
    PersonService,
    PartyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
