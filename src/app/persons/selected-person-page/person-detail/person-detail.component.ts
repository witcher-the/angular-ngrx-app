import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../../model/person";

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.less']
})
export class PersonDetailComponent {

  @Input() person: Person;
  @Input() isInvited: boolean;
  @Output() invite = new EventEmitter<Person>();
  @Output() uninvite = new EventEmitter<Person>();

  constructor() { }

  get age(): number {
    return new Date().getFullYear() - new Date(this.person.dob).getFullYear();
  }



}
