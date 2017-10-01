import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemTodoService} from "./services/in-memory-persons.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MyInterceptor} from "./services/http-interceptor.service";
import {FindPersonPageComponent} from './persons/find-person-page/find-person-page.component';
import {PersonSearchComponent} from './persons/find-person-page/person-search/person-search.component';
import {PersonService} from "./services/person.service";
import {PersonOverviewComponent} from './persons/find-person-page/person-overview-list/person-overview/person-overview.component';
import {PersonOverviewListComponent} from "./persons/find-person-page/person-overview-list/person-overview-list.component";
import {SelectedPersonPageComponent} from './persons/selected-person-page/selected-person-page.component';
import {PersonDetailComponent} from './persons/selected-person-page/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FindPersonPageComponent,
    PersonSearchComponent,
    PersonOverviewListComponent,
    PersonOverviewComponent,
    SelectedPersonPageComponent,
    PersonDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemTodoService, {delay: 500, dataEncapsulation: false}),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
