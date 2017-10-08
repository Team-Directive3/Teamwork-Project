import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import {
    TeamCreateComponent,
    TeamUpdateComponent,
    ViewTeamsComponent,
    TeamDetailsComponent,
    TeamRemoveComponent
} from './teams';
import {
    RegisterComponent,
    LoginComponent
} from './users';
import {
    ProjectCreateComponent,
    ProjectUpdateComponent,
    ViewProjectsComponent,
    ProjectDetailsComponent,
    ProjectRemoveComponent
} from './projects';
import {
  EventCreateComponent,
  EventUpdateComponent,
  ViewEventsComponent,
  EventDetailsComponent,
  EventRemoveComponent
} from './events';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },

    { path: 'login', component: LoginComponent },
    { path: 'signin', component: RegisterComponent },
    { path: 'logout', component: LoginComponent },

    { path: 'teams', component: ViewTeamsComponent },
    { path: 'teams/create', component: TeamCreateComponent },
    { path: 'teams/update/:id', component: TeamUpdateComponent },
    { path: 'teams/remove/:id', component: TeamRemoveComponent },
    { path: 'teams/:id', component: TeamDetailsComponent },

    { path: 'projects', component: ViewProjectsComponent },
    { path: 'projects/create', component: ProjectCreateComponent },
    { path: 'projects/update/:id', component: ProjectUpdateComponent, canActivate:[false] },
    { path: 'projects/remove/:id', component: ProjectRemoveComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },

    { path: 'events', component: ViewEventsComponent },
    { path: 'events/create', component: EventCreateComponent },
    { path: 'events/update/:id', component: EventUpdateComponent },
    { path: 'events/remove/:id', component: EventRemoveComponent },
    { path: 'events/:id', component: EventDetailsComponent },

];
