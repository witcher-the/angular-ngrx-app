import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../model/person';
import * as fromApp from '../../store/app.reducers';
import * as PersonsActions from '../store/persons.actions';

@Component({
	selector: 'find-person-page',
	templateUrl: './find-person-page.component.html',
	styleUrls: ['./find-person-page.component.less']
})
export class FindPersonPageComponent {

	searchQuery: Observable<string>;
	persons: Observable<Person[]>;

	constructor(private store: Store<fromApp.AppState>) {

		this.searchQuery = this.store.select(fromApp.selectSearchQuery);
		this.persons = this.store.select(fromApp.selectSearchResults);
	}

	search(query: string) {
		this.store.dispatch(new PersonsActions.Search(query));
	}
}
