import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoRoutingModule } from './modules/todo/todo-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', loadChildren: './modules/todo/todo.module#TodoModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
