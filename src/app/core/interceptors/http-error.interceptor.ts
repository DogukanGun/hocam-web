import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            this.toastrService.warning(`${error.error.message}`, 'Hata', { tapToDismiss: false, closeButton: true, extendedTimeOut: 5000 });
          } else {
            // server-side error
            if (error.status === 400) {
              this.toastrService.warning(`${error.error}`, 'Uyarı', { tapToDismiss: false, closeButton: true, extendedTimeOut: 5000 });
            } else if (error.status === 500) {
              errorMessage = `${error.error?.traceId}, ${error.error?.detail}`;
              this.toastrService.error(errorMessage, 'Hata', { tapToDismiss: false, closeButton: true, extendedTimeOut: 5000 });
            } else if (error.status === 401) {
              this.router.navigate(['./login']);
            } else {
              this.toastrService.error(`${error.message}`, 'Hata', { tapToDismiss: false, closeButton: true, extendedTimeOut: 5000 });
            }
          }

          return throwError(errorMessage);
        })
      );
  }
}
