import {Person} from '../../model/person';
import {
	PersonsActions,
	PersonsActionTypes
} from './persons.actions';

export interface State {
	searchQuery: string;
	searchResults: Person[];
}

const initialState: State = {
	searchQuery: '',
	searchResults: []
};

export function personsReducer(
	state = initialState,
	action: PersonsActions) {

	switch (action.type) {

		case PersonsActionTypes.SEARCH:
			return {
				...state,
				searchQuery: action.payload
			};
		case PersonsActionTypes.SEARCH_SUCCESS:
			return {
				...state,
				searchResults: action.payload
			};
		default:
			return state;
	}
}
