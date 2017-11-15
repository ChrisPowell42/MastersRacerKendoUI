import { Injectable }     from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(private auth: AuthService,
              private router: Router) {
    auth.handleAuthentication();
}

  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');
  
    return this.checkLogin();
  }

  private checkLogin(): boolean {

    if (this.auth.isAuthenticated()) {return true;}

    this.router.navigate(['/notauthorized']);
    return false;

  }

}
