import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

import { UsersService } from './../../../core/services/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    public authenticated: boolean;
    profile: Object;

    constructor(
        public usersService: UsersService,
        private router: Router,
        private http: Http,
        private formBuilder: FormBuilder,
        private notificationsService: NotificationsService
    ) {
      this.loginForm = formBuilder.group({
        'username': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
        'password': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])]
      });
     }

    ngOnInit() {

    }

    login(value: any) {
        let form = {
            'username': value.username,
            'password': value.password
        };

        this.usersService.login(this.loginForm.value).subscribe((res: any) => {
            this.notificationsService.success('Success', 'Successfuly logged in!');
            this.router.navigate(['/']);
        },
        (err: any) => {
            this.notificationsService.error('Login error', 'Try again!');
            this.router.navigate(['/login']);
        });
    }
    public logout() {
      this.usersService.logoutUser();
      this.router.navigate(['/']);
    }
}
