import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Todo} from '../modals/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  toggleCompleted(todo:Todo):Observable<any>{
    const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
  deleteTodo(todo:Todo):Observable<any>{
    const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }
  addTodo(todo:Todo):Observable<any>{
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, httpOptions)
  }
}
