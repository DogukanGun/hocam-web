import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuizActivateService implements CanActivate {
  constructor(private httpClient: HttpClient, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.httpClient.get<any>('user/check-to-start-campaign').pipe(
      map(result => {
        if (result.code == 1) {
          alert(result.message);
          this.router.navigate(['/profile']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

}