import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PartyPersonOverviewComponent} from './party-list-page/party-person-overview/party-person-overview.component';
import {PartyListPageComponent} from './party-list-page/party-list-page.component';
import {partyRoutes} from './party.routes';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
