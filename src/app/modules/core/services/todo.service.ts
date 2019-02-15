import { Injectable } from '@angular/core';
import { List } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: List[] = [
    {
      id: 1,
      user_id: 1,
      title: 'Angular Todo',
      created_on: new Date(),
      updated_on: null,
      list_items: []
    },
    {
      id: 2,
      user_id: 2,
      title: 'Python Todo',
      created_on: new Date(),
      updated_on: null,
      list_items: []
    },
    {
      id: 3,
      user_id: 3,
      title: 'My shopping list',
      created_on: new Date(),
      updated_on: null,
      list_items: []
    },
    {
      id: 4,
      user_id: 4,
      title: 'My fitness programme',
      created_on: new Date(),
      updated_on: null,
      list_items: []
    }
  ];

  constructor() {
    this.todos = this.getAllLists();
  }

  public getAllLists() {
    return this.todos;
  }

  public addTodo(todo: List) {
    this.todos.push(todo);
  }

  public getTodos() {
    return this.todos.slice(0, this.todos.length);
  }

  public countTodos() {
    return this.todos.length;
  }
}
