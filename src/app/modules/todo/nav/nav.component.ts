import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../core/services/todo.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public todoListCount: number;
  public notificationsCount: number;
  public friendsCount: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoListCount = this.todoService.countTodos();
  }

}
