import {createFeatureSelector} from '@ngrx/store';
import * as _ from 'lodash';
import {Person} from '../../model/person';
import * as PersonsActions from './persons.actions';

export interface PersonsFeatureState {
	persons: State;
}

export interface State {
	searchQuery: string;
	searchResults: Person[];
	selectedPersonId: number;
	selectedPerson: Person;
}

const initialState: State = {
	searchQuery: '',
	searchResults: [],
	selectedPersonId: -1,
	selectedPerson: null
};

export function personsReducer(
	state = initialState,
	action: PersonsActions.PersonsActions) {

	switch (action.type) {

		case PersonsActions.SEARCH:
			return {
				...state,
				searchQuery: action.payload
			};

		case PersonsActions.SEARCH_SUCCESS:
			return {
				...state,
				searchResults: action.payload
			};
		case PersonsActions.SELECT:
			return {
				...state,
				selectedPersonId: action.payload
			};
		case PersonsActions.SELECT_SUCCESS:
			return {
				...state,
				selectedPerson: action.payload
			};
		default:
			return state;
	}
}

export const selectPersonsState = createFeatureSelector<State>('persons');

export function selectSearchQuery(state: State): string {
	return state.searchQuery;
}

export function selectSearchResults(state: State): Person[] {
	return state.searchResults;
}

export function selectSelectedPerson(state: State): Person {
	return state.selectedPerson;
}
