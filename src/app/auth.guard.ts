import { AuthService } from './auth.service'
import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    console.log('Le guard marche')
    if (this.authService.isLoggedIn) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
}
