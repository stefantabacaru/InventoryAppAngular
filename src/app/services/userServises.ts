import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";


@Injectable()
export class UserServices {

  constructor(private httpClient: HttpClient,
  ) { }


  readonly baseUrl = "https://localhost:44391/api/User";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl+`/get`, this.httpOptions)
  }

  getUserByName(name: string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + '/get/byUserName/' + name, this.httpOptions)
  }

  addUser(object: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl+ '/post', object, this.httpOptions)
  }

  editUser(object: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl+ '/edit', object, this.httpOptions)
  }

  deleteUser(id: number) {
    return this.httpClient.delete<Location>(this.baseUrl + '/delete/' + id, this.httpOptions)

  }
}
