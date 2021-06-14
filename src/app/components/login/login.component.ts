import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor( private auth: AuthService,
               private router: Router) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm): any {

    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait a moment...'
    });

    Swal.showLoading();

    this.auth.logIn(this.user).subscribe((resp: any) => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');
    }, (e: any) => {
      console.error(e.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Authentication error',
        text: e.error.error.message
      });
    });

    // console.log('Login Form');
    // console.log(form);
  }

}
