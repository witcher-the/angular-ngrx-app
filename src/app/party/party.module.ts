import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PartyListPageComponent} from './party-list-page/party-list-page.component';
import {PartyPersonOverviewComponent} from './party-list-page/party-person-overview/party-person-overview.component';
import {partyRoutes} from './party.routes';

@NgModule({
	declarations: [
		PartyListPageComponent,
		PartyPersonOverviewComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(partyRoutes)
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class PartyModule {
}
