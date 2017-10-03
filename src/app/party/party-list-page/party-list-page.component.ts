import {
	Component,
	OnInit
} from '@angular/core';
import * as _ from 'lodash';
import {Person} from '../../model/person';
import {PartyService} from '../../services/party.service';

@Component({
	selector: 'party-list-page',
	templateUrl: './party-list-page.component.html',
	styleUrls: ['./party-list-page.component.less']
})
export class PartyListPageComponent implements OnInit {

	invitedPersons: Person[] = [];

	constructor(private partyService: PartyService) {
	}

	get isSomebodyInvited(): boolean {
		return !_.isEmpty(this.invitedPersons);
	}

	ngOnInit() {
		this.partyService
			.load()
			.subscribe(invitedPersons => this.invitedPersons = invitedPersons);
	}

	attending(person: Person): void {
		this.partyService.update(person).subscribe();
	}
}
