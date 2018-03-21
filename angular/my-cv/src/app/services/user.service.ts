import { Injectable } from '@angular/core'; // lines 1-3 are the imports needed for a service to be functional
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; // data structure for async calls in angular
import { User } from '../models/user';


const url = 'http://localhost:63522/Users/';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {} // private creates a local property from within this constructor

  List(): Observable<User[]> {
    // user array wrapped as an observable
    return this.http.get(url + "List") as Observable<User[]>; // cast 'as' Observable
  }

  Get(id: string): Observable<User> {
    return this.http.get(url + "Get/" + id) as Observable<User>;
  }

  Create(user: User): Observable<any> {
    return this.http.post(url + "Create", user) as Observable<any>;
  }

  Change(user: User): Observable<any> {
    return this.http.post(url + "Change", user) as Observable<any>;
  }

  Remove(user: User): Observable<any> {
    return this.http.post(url + "Remove", user) as Observable<any>;
  }
}
