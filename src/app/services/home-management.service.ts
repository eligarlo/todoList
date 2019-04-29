import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeManagementService {

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(`${environment.uri}members`);
  }
}
