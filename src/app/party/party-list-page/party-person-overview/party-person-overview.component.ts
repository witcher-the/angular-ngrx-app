import {
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core';
import {Person} from '../../../model/person';

@Component({
	selector: 'party-person-overview',
	templateUrl: './party-person-overview.component.html',
	styleUrls: ['./party-person-overview.component.less']
})
export class PartyPersonOverviewComponent {

	@Input() person: Person;
	@Output() attending = new EventEmitter<Person>();
}
