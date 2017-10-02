import {
  Component,
  OnInit
} from '@angular/core';
import {Person} from '../../model/person';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../../services/person.service';
import 'rxjs/add/operator/switchMap';
import {PartyService} from '../../services/party.service';

@Component({
  selector: 'app-selected-person-page',
  templateUrl: './selected-person-page.component.html',
  styleUrls: ['./selected-person-page.component.less']
})
export class SelectedPersonPageComponent implements OnInit {

  person: Person;

  constructor(private activatedRoute: ActivatedRoute,
              private personService: PersonService,
              private partyService: PartyService) {
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

  isPersonInvited(): boolean {
    return this.person && this.partyService.isInvited(this.person);
  }

  invite(person: Person): void {
    this.partyService.invite(person).subscribe();
  }

  uninvite(person: Person): void {
    this.partyService.uninvite(person).subscribe();
  }
}
