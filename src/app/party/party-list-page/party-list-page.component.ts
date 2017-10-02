import {
  Component,
  OnInit
} from '@angular/core';
import {Person} from '../../model/person';
import {PartyService} from '../../services/party.service';
import * as _ from 'lodash';

@Component({
  selector: 'party-list-page',
  templateUrl: './party-list-page.component.html',
  styleUrls: ['./party-list-page.component.less']
})
export class PartyListPageComponent implements OnInit {

  invitedPersons: Person[] = [];

  constructor(private partyService: PartyService) {
  }

  ngOnInit() {
    this.partyService
      .load()
      .subscribe(invitedPersons => this.invitedPersons = invitedPersons);
  }

  get isSomebodyInvited(): boolean {
    return !_.isEmpty(this.invitedPersons);
  }

  attending(person: Person): void {
    this.partyService.update(person).subscribe();
  }
}
