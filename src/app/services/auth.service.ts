import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyCKyZt44Rxee_7RUaNXtOwzt0t_IipX7Yg';

  private userToken = '';

  // Sign up with email / password
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //   Sign in with email / password
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    constructor(private http: HttpClient) {
      this.readToken();
    }

    logOut(): any {
      localStorage.removeItem('token');
    }

    logIn(user: UserModel): any {

      const authData = {
        ...user,
        // email: user.email,
        // password: user.password,
        returnSecureToken: true
      };

      return this.http.post(`${this.url}:signInWithPassword?key=${this.apikey}`, authData)
        .pipe(
          map ((resp: any) => {
            console.log('RXJS Map');
            this.saveToken( resp[`idToken`] );
            return resp;
          })
        );
    }

    register(user: UserModel): any {

      const authData = {
        ...user,
        // email: user.email,
        // password: user.password,
        returnSecureToken: true
      };

      return this.http.post(`${this.url}:signUp?key=${this.apikey}`, authData)
        .pipe(
          map ((resp: any) => {
            console.log('RXJS Map');
            this.saveToken( resp[`idToken`] );
            return resp;
          })
        );
    }

    private saveToken( idToken: string ): any {
      this.userToken = idToken;
      localStorage.setItem('token', idToken);

      const lastIn = new Date();
      lastIn.setSeconds( 3600 );

      localStorage.setItem('expiresTI', lastIn.getTime().toString()); // In milliseconds
    }

    readToken(): any {
      if (localStorage.getItem('token')) {
        this.userToken = localStorage.getItem('token') || '';
      } else {
        this.userToken = '';
      }

      return this.userToken;
    }

    isAuthenticated(): boolean {
      if ( this.userToken.length < 2 ) {
        return false;
      }

      const remTime = Number(localStorage.getItem('expiresTI')); // Remaining Time in milliseconds

      const updTime = new Date();
      updTime.setTime(remTime); // Updating Time to Remaining Time

      if ( updTime > new Date() ) {
        return true;
      } else {
        return false;
      }
    }
}
