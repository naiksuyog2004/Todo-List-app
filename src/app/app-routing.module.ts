import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcomponentComponent } from './mycomponents/aboutcomponent/aboutcomponent.component';
import { TodoComponent } from './mycomponents/todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'about', component:AboutcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
