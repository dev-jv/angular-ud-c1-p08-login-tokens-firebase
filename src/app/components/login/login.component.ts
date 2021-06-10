import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor() {
  }

  ngOnInit(): void {
  }

  login(form: NgForm): any {

    if (form.invalid) {
      return;
    }

    console.log('Login Form');
    console.log(form);
  }

}
