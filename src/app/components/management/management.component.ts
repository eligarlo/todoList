import { Component, OnInit } from '@angular/core';

import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  tasks: any;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoListService.getTasks().subscribe((res: any) => {
      this.tasks = res.tasks;
    });
  }

}
