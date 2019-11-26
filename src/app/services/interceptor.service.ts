import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { UserService } from '../../app/user.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.clone({ setHeaders: { 'Accept': 'application/json' } })
    if (!(req.body instanceof FormData)) req = req.clone({ setHeaders: { 'Content-Type': 'application/json' } });
    req = req.clone({ setHeaders: { 'secret': 'JMZGBkeaYdEEZsjLWNulZroWHem2KVtg' } });
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        
      }, err => {
      })
    );
  }
}
