import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  createTodo(task: any) {
    return this.http.post(`${environment.uri}addTask`, task);
  }

  getTasks() {
    return this.http.get(`${environment.uri}tasks`);
  }
}
