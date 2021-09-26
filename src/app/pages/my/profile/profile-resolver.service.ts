import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolver {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return forkJoin({ logins: this.userService.getUserLoginStatus(), user: this.userService.getUser() });
    }
}