// // src/app/auth/auth-guard.service.ts
// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';
// import { ToastrService } from 'ngx-toastr';

// @Injectable()
// export class AuthZGuardService implements CanActivate {
//   constructor(private auth: AuthService,
//     private router: Router, private toastrService: ToastrService) { }

//   canActivate(route: ActivatedRouteSnapshot): boolean {

//     const expectedRole = route.data.expectedRole;

//     if (!this.auth.isAuthenticated() || expectedRole !== this.auth.getUserRole()) {
//       this.toastrService.error('Bu sayfaya erişim hakkınız yoktur.', 'Erişim Hatası',
//         { tapToDismiss: false, closeButton: true, extendedTimeOut: 5000 });
//       this.router.navigate(['/research']);
//       return false;
//     }
//     return true;
//   }
// }
