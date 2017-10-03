import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/persons', pathMatch: 'full'},
  {path: 'persons', loadChildren: 'app/persons/persons.module#PersonsModule'},
  {path: 'party', loadChildren: 'app/party/party.module#PartyModule'}
];
