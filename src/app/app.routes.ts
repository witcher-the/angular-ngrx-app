import {Routes} from "@angular/router";
import {FindPersonPageComponent} from "./persons/find-person-page/find-person-page.component";
import {SelectedPersonPageComponent} from "./persons/selected-person-page/selected-person-page.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: 'persons',  component: FindPersonPageComponent },
  { path: 'persons/:id',  component: SelectedPersonPageComponent }
];
