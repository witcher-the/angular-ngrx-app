import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Person} from '../model/person';
import * as _ from 'lodash';

@Injectable()
export class PartyService {
  private partyUrl = 'api/party';
  private persons: Person[] = [];

  constructor(private http: HttpClient) {
  }

  load(): Observable<Person[]> {
    return this.http
      .get<Person[]>(`${this.partyUrl}`)
      .map(persons => _.sortBy(persons, (person) => person.name))
      .do(persons => this.persons = persons);
  }

  invite(person: Person): Observable<Person> {
    return this.http
      .post<Person>(`${this.partyUrl}`, person)
      .do(() => this.persons.push(person));
  }

  uninvite(person: Person): Observable<void> {
    return this.http
      .delete<void>(`${this.partyUrl}/${person.id}`)
      .do(() => _.remove(this.persons, this.getPersonSamePredicate(person)));
  }

  update(person: Person): Observable<void> {
    return this.http
      .put<void>(`${this.partyUrl}/${person.id}`, person);
  }

  isInvited(person: Person): boolean {
    return _.some(this.persons, this.getPersonSamePredicate(person));
  }

  private getPersonSamePredicate(person: Person): (person: Person) => boolean {
    return invitedPerson => invitedPerson.id === person.id;
  }
}
