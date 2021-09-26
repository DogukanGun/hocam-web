// // src/app/auth/auth-guard.service.ts
// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';
// import { ToastrService } from 'ngx-toastr';

// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(private auth: AuthService,
//     private router: Router,
//     private toastrService: ToastrService) { }
//   canActivate(): boolean {
//     if (!this.auth.isAuthenticated()) {
//       this.router.navigate(['login']);
//       this.toastrService.warning('Oturum süreniz dolmuştur. Lütfen tekrar giriş yapınız.', 'Uyarı',
//         { tapToDismiss: false, closeButton: true, extendedTimeOut: 5000 });
//       return false;
//     }
//     return true;
//   }
// }
