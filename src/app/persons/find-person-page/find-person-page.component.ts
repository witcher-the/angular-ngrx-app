import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../model/person';
import * as PersonsActions from '../store/persons.actions';
import * as fromPersons from '../store/persons.reducers';

@Component({
	selector: 'find-person-page',
	templateUrl: './find-person-page.component.html',
	styleUrls: ['./find-person-page.component.less']
})
export class FindPersonPageComponent {

	searchQuery: Observable<string>;
	persons: Observable<Person[]>;

	constructor(private store: Store<fromPersons.PersonsFeatureState>) {

		this.searchQuery = this.store.select(fromPersons.selectPersonsState).select(fromPersons.selectSearchQuery);
		this.persons = this.store.select(fromPersons.selectPersonsState).select(fromPersons.selectSearchResults);
	}

	search(query: string) {
		this.store.dispatch(new PersonsActions.Search(query));
	}
}
