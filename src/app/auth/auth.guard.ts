import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private auth: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (environment.production) {
      if (!this.auth.authenticated) {
        window.localStorage.setItem(this.auth.env.storageName.fullPath, '/' + next.url.join('/'));
        this.router.navigateByUrl("/wxauth")
        return false;
      }
    }
    return true;
  }
}
