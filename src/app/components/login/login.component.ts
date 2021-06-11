import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserModel} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor( private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm): any {

    if (form.invalid) {
      return;
    }

    this.auth.logIn(this.user).subscribe((resp: any) => {
      console.log(resp);
    }, (e: any) => {
      console.error(e.error.error.message);
    });

    // console.log('Login Form');
    // console.log(form);
  }

}
