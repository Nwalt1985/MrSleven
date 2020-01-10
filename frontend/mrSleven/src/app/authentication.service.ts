import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserDetails,
         TokenResponse,
         TokenPayload,
         TokenPayloadUser,
         TokenPayloadUpdatePass,
         TokenPayloadABoutHeader,
         TokenPayloadABoutImages,
         TokenPayloadABoutSignature,
         TokenPayloadAboutText } from './app-interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  /*
    We implement saveToken to handle storing the token into localStorage
    and onto the token property, a getToken method to retrieve the token from
    localStorage or from the token property, and a logout function that removes
    the JWT token from memory and redirects to the home page.
  */
  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  /*
    the getUserDetails function should return an object of the UserDetails type or null,
    depending on whether a valid token is found or not.
  */
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;

    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);

      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  /*
    Add a new method called isLoggedIn to the service.
    It uses the getUserDetails method to get the token details from the JWT token
     and checks the expiration hasn’t passed yet:
  */
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  /*
    To facilitate making API calls, add the request method to the AuthenticationService,
    which is able to construct and return the proper HTTP request observable depending
    on the specific type of request. It’s a private method, since it’s only used by this service,
    and exists just to reduce code duplication. This will use the Angular HttpClient service
  */
  private request(
    method: 'post' | 'get',
    type: 'login' | 'register' | 'profile' | 'delete' | 'get-users' | 'update-pass'
      | 'update-about-header' | 'update-about-image' | 'update-about-signature'
      | 'update-about-content',
    dataPayload?: TokenPayload | TokenPayloadUser | TokenPayloadUpdatePass
      | TokenPayloadABoutHeader | TokenPayloadABoutImages | TokenPayloadABoutSignature
      | TokenPayloadAboutText,
    params?: string
  ): Observable<any> {
    let base;

    if (method === 'post') {

      base = this.http.post(`admin/auth/${type}`, dataPayload, {
        headers: {
          Authorization: `Bearer ${this.getToken()}`
        }
      });

    } else {
      base = this.http.get(`admin/auth/${type}`, {
        headers: {
          Authorization: `Bearer ${this.getToken()}`
        }
      });
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  /*
    We’ll need an interface between the Angular app and the API,
    to call the login and register endpoints and save the returned token,
    or the profile endpoint to get the user details.
  */
  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public getAdminUsers(): Observable<any> {
    return this.request('get', 'get-users');
  }

  public delete(user: TokenPayloadUser): Observable<any> {
    return this.request('post', 'delete', user);
  }

  public updatePass(user: TokenPayloadUpdatePass): Observable<any> {
    return this.request('post', 'update-pass', user);
  }

  public updateAboutHeader(about: TokenPayloadABoutHeader): Observable<any> {
    return this.request('post', 'update-about-header', about);
  }

  public updateAboutImage(image: TokenPayloadABoutImages ): Observable<any> {
    return this.request('post', 'update-about-image', image);
  }

  public updateAboutSignature(image: TokenPayloadABoutSignature ): Observable<any> {
    return this.request('post', 'update-about-signature', image);
  }

  public updateAboutText(content: TokenPayloadAboutText ): Observable<any> {
    return this.request('post', 'update-about-content', content);
  }


}

