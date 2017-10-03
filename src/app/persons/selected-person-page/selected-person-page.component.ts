import {
	Component,
	OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Person} from '../../model/person';
import {PartyService} from '../../services/party.service';
import {PersonService} from '../../services/person.service';

@Component({
	selector: 'app-selected-person-page',
	templateUrl: './selected-person-page.component.html',
	styleUrls: ['./selected-person-page.component.less']
})
export class SelectedPersonPageComponent implements OnInit {

	person: Person;

	constructor(
		private activatedRoute: ActivatedRoute,
		private personService: PersonService,
		private partyService: PartyService) {
	}


	ngOnInit(): void {
		this.activatedRoute
			.params
			.switchMap(params => this.personService.getPerson(params.id))
			.subscribe(person => this.person = person);
	}

	isPersonInvited(): boolean {
		return this.person && this.partyService.isInvited(this.person);
	}

	invite(person: Person): void {
		this.partyService.invite(person).subscribe();
	}

	uninvite(person: Person): void {
		this.partyService.uninvite(person).subscribe();
	}
}
