import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor( private auth: AuthService,
               private router: Router) {
    this.user = new UserModel();
    // this.user.email = 'drac.1000@gmail.com';
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): any {

    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait a moment...'
    });

    Swal.showLoading();

    this.auth.register(this.user).subscribe((resp: any) => {
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

    // console.log('Form send');
    // console.log(this.user);
    // console.log(form);
  }

}
