import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoggerService } from './logger.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';

import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  private userProfile: any;
  
  auth0 = new auth0.WebAuth({
    clientID: 'URX1ufLMF0Elb75E2jC16b8Fnk6AhOAp',
    domain: 'mastersracers.auth0.com',
    responseType: 'token id_token',
    audience: 'https://mastersracers.auth0.com/userinfo',
    redirectUri: 'http://mastersracers.azurewebsites.net/callback', //'http://localhost:4200/callback',      
    scope: 'openid'
  });

  constructor(public router: Router,
              public logger: LoggerService) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public isAuthenticatedObs(): Observable<boolean> {
    return Observable.of(this.isAuthenticated());
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
  
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

}