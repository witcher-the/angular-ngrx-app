import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryService} from './services/in-memory.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {FindPersonPageComponent} from './persons/find-person-page/find-person-page.component';
import {PersonSearchComponent} from './persons/find-person-page/person-search/person-search.component';
import {PersonService} from './services/person.service';
import {PersonOverviewComponent} from './persons/find-person-page/person-overview-list/person-overview/person-overview.component';
import {PersonOverviewListComponent} from './persons/find-person-page/person-overview-list/person-overview-list.component';
import {SelectedPersonPageComponent} from './persons/selected-person-page/selected-person-page.component';
import {PersonDetailComponent} from './persons/selected-person-page/person-detail/person-detail.component';
import {PartyService} from './services/party.service';
import {PartyListPageComponent} from './party/party-list-page/party-list-page.component';
import {PartyPersonOverviewComponent} from './party/party-list-page/party-person-overview/party-person-overview.component';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FindPersonPageComponent,
    PersonSearchComponent,
    PersonOverviewListComponent,
    PersonOverviewComponent,
    SelectedPersonPageComponent,
    PersonDetailComponent,
    PartyListPageComponent,
    PartyPersonOverviewComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
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
