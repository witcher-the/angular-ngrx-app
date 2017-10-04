import {Injectable} from '@angular/core';
import {
	Actions,
	Effect
} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {PersonService} from '../../services/person.service';
import * as PersonsActions from './persons.actions';

@Injectable()
export class PersonsEffects {

	@Effect()
	search: Observable<Action> = this.actions.ofType(PersonsActions.SEARCH)
		.map((action: PersonsActions.Search) => action.payload)
		.switchMap(searchQuery => {
			if (_.isEmpty(searchQuery)) {
				return Observable.of([]);
			}
			return this.personService.searchPersons(searchQuery);
		})
		.map(results => {
			console.log();
			return new PersonsActions.SearchSuccess(results);
		});

	@Effect()
	select: Observable<Action> = this.actions.ofType(PersonsActions.SELECT)
		.map((action: PersonsActions.Select) => action.payload)
		.switchMap(personId => this.personService.getPerson(personId))
		.map(person => new PersonsActions.SelectSuccess(person));

	constructor(
		private actions: Actions,
		private personService: PersonService) {
	}
}