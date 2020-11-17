import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthEventsComponent } from './components/auth-events/auth-events.component';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../app/guards/auth.guard';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'auth-event',
    component: AuthEventsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
