import { Component, OnInit } from '@angular/core';
import { List } from '../../core/models/todo.models';

import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../../core/services/todo.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  public allLists: List[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.allLists = this.todoService.getTodos();
  }

  createList() {
    Swal({
      title: 'Enter To-Do List Title:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'on'
      },
      showCancelButton: false,
      confirmButtonText: 'Create To-Do List',
      showLoaderOnConfirm: true,
      preConfirm: (title) => {
        const newList = {
          id: 10,
          user_id: 10,
          title: title,
          created_on: new Date(),
          updated_on: null,
          list_items: []
        }
        this.allLists.push(newList);
        return newList;
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((list) => {
      if (list.value) {
        Swal({
          title: `${String((list).value.title)}`,
          text: 'New to-do list created successfully!',
          confirmButtonText: 'View/Edit List'
        }).then(
          res => {
            if (res.value) {
              this.router.navigate([`${list.value.id}/view`], { relativeTo: this.route });
            }
          }
        );
      }
    });
  }

  randomPx(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
