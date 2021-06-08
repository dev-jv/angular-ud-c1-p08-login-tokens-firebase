import {Component, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor() {
    this.user = new UserModel();
    this.user.email = 'drac.1000@gmail.com';
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): any {

    if (form.invalid) {
      return;
    }

    console.log('Form send');
    console.log(this.user);
    console.log(form);
  }

}
