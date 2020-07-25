import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/modals/Todo';
import {TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoSerive:TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
    this.todoSerive.toggleCompleted(todo).subscribe(todo => {
      console.log('server toggled');
      
    })
    
  }
  onDelete(todo){
    this.deleteTodo.emit(todo)
    
  }
}
