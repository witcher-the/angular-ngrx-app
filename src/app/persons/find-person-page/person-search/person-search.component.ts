import {Component, EventEmitter, Input, Output} from '@angular/core';
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.less']
})
export class PersonSearchComponent {
  @Input() query = '';
  @Output() search = new EventEmitter<string>();
}
