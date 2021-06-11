import { Injectable } from '@angular/core';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyCKyZt44Rxee_7RUaNXtOwzt0t_IipX7Yg';

  // Sign up with email / password
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //   Sign in with email / password
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    constructor() { }

    logOut(): any {

    }

    logIn(user: UserModel): any {

    }

    register(user: UserModel): any{

    }
}
