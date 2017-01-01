import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { User } from './../models/users';

@Injectable()
export class UsersService {
    public lastId: number;
    private headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });

    private usersUrl = 'api/users';
    private usersLoginUrl = 'api/users/login';

    constructor(private http: Http) {
        this.getAll().subscribe(users => this.lastId = users.length);
    }

    getAll(): Observable<any> {
        return this.http.get(this.usersUrl)
                    .map((res: Response) => res.json().data as User[]);
    }

    login(username: string, password: string): any {
        // this.getByUsername(username)
        //             .then(

        //             });
    }

    register(body: any): Promise<any> {
        return this.http.post(this.usersUrl, JSON.stringify( body ), {headers: this.headers} )
            .toPromise()
            .then((res: Response) => localStorage.setItem('id_token', res.json().id_token))
            .catch(this.handleError);
    }

    // getByUsername(username: string): Promise<any> {

    // }

    public logoutUser(): void {
        localStorage.clear();
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}