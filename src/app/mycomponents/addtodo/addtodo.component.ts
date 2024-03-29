import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit{
  title:string;
  dics:string;
  @Output() todoAdd: EventEmitter<Todo>=new EventEmitter;
  ngOnInit():void{}
  onSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      dics:this.dics,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
