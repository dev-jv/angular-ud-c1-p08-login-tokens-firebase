import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyCKyZt44Rxee_7RUaNXtOwzt0t_IipX7Yg';

  // Sign up with email / password
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //   Sign in with email / password
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    constructor(private http: HttpClient) { }

    logOut(): any {

    }

    logIn(user: UserModel): any {

      const authData = {
        ...user,
        // email: user.email,
        // password: user.password,
        returnSecureToken: true
      };

      return this.http.post(`${this.url}:signInWithPassword?key=${this.apikey}`, authData);

    }

    register(user: UserModel): any {

      const authData = {
        ...user,
        // email: user.email,
        // password: user.password,
        returnSecureToken: true
      };

      return this.http.post(`${this.url}:signUp?key=${this.apikey}`, authData);

    }
}
