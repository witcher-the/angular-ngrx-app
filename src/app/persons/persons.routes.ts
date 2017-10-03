import {Routes} from '@angular/router';
import {FindPersonPageComponent} from './find-person-page/find-person-page.component';
import {SelectedPersonPageComponent} from './selected-person-page/selected-person-page.component';

export const personsRoutes: Routes = [
	{path: '', component: FindPersonPageComponent},
	{path: ':id', component: SelectedPersonPageComponent}
];
