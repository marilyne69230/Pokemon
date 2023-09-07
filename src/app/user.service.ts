import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Iuser } from './Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<Iuser[]>(this.url);
  }

  fetchById(id: number) {
    return this.http.get<Iuser[]>(this.url);
  }
}