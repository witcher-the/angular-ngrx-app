import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FindPersonPageComponent} from './find-person-page/find-person-page.component';
import {PersonOverviewListComponent} from './find-person-page/person-overview-list/person-overview-list.component';
import {PersonOverviewComponent} from './find-person-page/person-overview-list/person-overview/person-overview.component';
import {PersonSearchComponent} from './find-person-page/person-search/person-search.component';
import {personsRoutes} from './persons.routes';
import {PersonDetailComponent} from './selected-person-page/person-detail/person-detail.component';
import {SelectedPersonPageComponent} from './selected-person-page/selected-person-page.component';

@NgModule({
	declarations: [
		FindPersonPageComponent,
		PersonSearchComponent,
		PersonOverviewListComponent,
		PersonOverviewComponent,
		SelectedPersonPageComponent,
		PersonDetailComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(personsRoutes)
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class PersonsModule {
}
