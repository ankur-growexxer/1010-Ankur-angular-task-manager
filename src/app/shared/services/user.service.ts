import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  deleteUser() {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    this.http
      .delete<any>('http://localhost:3000/api/users/me', { headers: header })
      .subscribe({
        next: (data) => {
          console.log(data);
          this.authService.logoutuser();
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  updateUser(user: any) {
    const params = {
      name: user.name,
      age: user.age,
    };
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    this.http
      .patch<any>('http://localhost:3000/api/users/me', params, {
        headers: header,
      })
      .subscribe({
        next: (data) => {
          this.authService.setuser(data);
          console.log(data);
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }
}
