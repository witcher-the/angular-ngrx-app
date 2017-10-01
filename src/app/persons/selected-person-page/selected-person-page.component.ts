import {Component, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../services/person.service";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-selected-person-page',
  templateUrl: './selected-person-page.component.html',
  styleUrls: ['./selected-person-page.component.less']
})
export class SelectedPersonPageComponent implements OnInit {

  person: Person;

  constructor(private activatedRoute: ActivatedRoute, private personService: PersonService) {
  }


  ngOnInit(): void {
    this.activatedRoute
      .params
      .switchMap(params => this.personService.getPerson(params.id))
      .subscribe(person => this.person = person);

    //     .switchMap(params => this.todoListService.getTodoList(params.id))
    //     .subscribe(todoList => {
    //       this.todoList = todoList;
    //       this.calculateIncompleteTodos();
    //     });
  }

  invite(person: Person): void {

  }

  uninvite(person: Person): void {

  }
}
