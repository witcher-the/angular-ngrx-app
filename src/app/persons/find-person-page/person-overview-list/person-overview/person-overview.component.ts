import {Component, Input} from '@angular/core';
import {Person} from "../../../../model/person";

@Component({
  selector: 'person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.less']
})
export class PersonOverviewComponent {

  @Input() person: Person;
}
