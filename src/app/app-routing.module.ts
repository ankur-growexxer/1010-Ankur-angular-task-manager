import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { AuthResolver } from './shared/resolver/auth.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    resolve: { auth: AuthResolver },
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: { auth: AuthResolver },
  },
  {
    path: 'createtask',
    component: CreateTaskComponent,
    canActivate: [AuthGuard],
    resolve: { auth: AuthResolver },
  },
  {
    path: 'tasks/edit/:id',
    component: EditTaskComponent,
    canActivate: [AuthGuard],
    resolve: { auth: AuthResolver },
  },
  {
    path: 'help',
    component: HelpComponent,
    canActivate: [AuthGuard],
    resolve: { auth: AuthResolver },
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
    resolve: { auth: AuthResolver },
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    resolve: {
      auth: AuthResolver,
    },
  },
  {
    path: 'profile/edit/:id',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
    resolve: {
      auth: AuthResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
