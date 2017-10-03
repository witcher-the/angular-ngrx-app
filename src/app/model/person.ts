import {Address} from './address';
import {Company} from './company';

export interface Person {
	id: number;
	name: string;
	lastName: string;
	username: string;
	avatar: string;
	email: string;
	dob: string;
	phone: string;
	website: string;
	address: Address;
	company: Company;
	attending?: boolean;
}
