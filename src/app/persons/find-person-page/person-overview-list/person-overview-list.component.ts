import {
	Component,
	Input
} from '@angular/core';
import {Person} from '../../../model/person';

@Component({
	selector: 'person-overview-list',
	templateUrl: './person-overview-list.component.html'
})
export class PersonOverviewListComponent {

	@Input() persons: Person[];
}
