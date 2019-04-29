import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TodoListService } from 'src/app/services/todo-list.service';
import { HomeManagementService } from 'src/app/services/home-management.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  form: FormGroup;
  members: any;

  constructor(private todoListService: TodoListService,
              private homeManagementService: HomeManagementService) { }

  ngOnInit() {
    this.form = new FormGroup({
      description: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      member: new FormControl(null),
      date: new FormControl(null),
    });

    this.homeManagementService.getMembers().subscribe((res: any) => {
      this.members = res.members;
    });
  }

  onSavePost() {
    this.todoListService.createTodo(this.form.value).subscribe((res: any) => {
      console.log(res);
    });
  }

}
