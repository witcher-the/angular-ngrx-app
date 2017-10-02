import {Component} from '@angular/core';
import {Person} from '../../model/person';
import {PersonService} from '../../services/person.service';
import * as _ from 'lodash';

@Component({
  selector: 'find-person-page',
  templateUrl: './find-person-page.component.html',
  styleUrls: ['./find-person-page.component.less']
})
export class FindPersonPageComponent {

  searchQuery = '';
  persons: Person[] = [];

  constructor(private personService: PersonService) {
  }

  search(query: string) {
    if (_.isEmpty(query)) {
      this.persons = [];
    } else {
      this.personService
        .searchPersons(query)
        .subscribe(persons => this.persons = persons);
    }
  }
}
