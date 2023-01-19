import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './mycomponents/todo/todo.component';
import { TodoItemComponent } from './mycomponents/todo-item/todo-item.component';
import { AddtodoComponent } from './mycomponents/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutcomponentComponent } from './mycomponents/aboutcomponent/aboutcomponent.component';
import { DeletetodoComponent } from './mycomponents/deletetodo/deletetodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddtodoComponent,
    AboutcomponentComponent,
    DeletetodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
