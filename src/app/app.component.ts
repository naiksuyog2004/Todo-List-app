import { Component } from '@angular/core';
import { Todo } from './Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title ="change title";
    // },2000);
  }
}
