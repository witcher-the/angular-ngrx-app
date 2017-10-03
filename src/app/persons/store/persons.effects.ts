import {Injectable} from '@angular/core';
import {
	Actions,
	Effect
} from '@ngrx/effects';
import {Action} from '@ngrx/store';
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
		.switchMap(searchQuery => this.personService.searchPersons(searchQuery))
		.map(results => new PersonsActions.SearchSuccess(results));

	constructor(
		private actions: Actions,
		private personService: PersonService) {
	}
}