import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Person} from '../model/person';
import * as _ from 'lodash';

@Injectable()
export class PersonService {
  private personsUrl = 'api/persons';

  constructor(private http: HttpClient) {
  }

  searchPersons(search: string): Observable<Person[]> {
    return this.http
      .get<Person[]>(`${this.personsUrl}?name=^${search}`)
      .map(persons => _.chunk(persons, 10)[0]);
  }

  getPerson(id: number): Observable<Person> {
    return this.http
      .get<Person>(`${this.personsUrl}/${id}`);
  }
}
