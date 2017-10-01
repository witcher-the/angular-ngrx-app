import {Component, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'find-person-page',
  templateUrl: './find-person-page.component.html',
  styleUrls: ['./find-person-page.component.less']
})
export class FindPersonPageComponent {

  searchQuery: string = '';
  persons: Person[] = [];

  constructor(private personService: PersonService) {
  }

  search(query: string) {
    this.personService
      .searchPersons(query)
      .subscribe(persons => this.persons = persons);
  }
}
