import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthResolver implements Resolve<any> {
  constructor(
    private readonly authService: AuthService,
    private httpClient: HttpClient
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });
    console.log(headers);

    this.httpClient
      .get<any>('http://localhost:3000/api/users/me', { headers: headers })
      .subscribe({
        next: (data) => {
          this.authService.setuser(data);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    return of(true);
  }
}
