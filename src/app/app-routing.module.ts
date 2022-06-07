import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './docs/login/login.component';
import { NewTaskComponent } from './docs/new-task/new-task.component';
import { RegisterComponent } from './docs/register/register.component';
import { TaskComponent } from './docs/task/task.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TaskComponent},
  {path: 'new-task', component: NewTaskComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
