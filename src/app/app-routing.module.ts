import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ManagementComponent } from './components/management/management.component';

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full'},
  { path: 'management', component: ManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
