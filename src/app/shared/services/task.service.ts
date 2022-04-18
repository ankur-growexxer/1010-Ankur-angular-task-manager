import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: any;
  task: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  delete(id: string) {
    // console.log(this.tasks.filter((item: any) => item._id !== id));
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });
    this.http
      .delete<any>('http://localhost:3000/api/tasks/' + id, { headers: header })
      .subscribe({
        next: (data) => {
          this.tasks = this.tasks.filter((item: any) => item._id !== id);
          this.getAllTasks();
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  update(task: any, id: any) {
    console.log('in EDIT BUTTON');

    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const params = {
      description: task.description,
      completed: task.status,
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    this.http
      .patch<any>('http://localhost:3000/api/tasks/' + id, params, {
        headers: header,
      })
      .subscribe({
        next: (data) => {
          console.log('update' + data);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  create(task: any) {
    const params = {
      description: task.description,
      completed: task.status,
    };
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    console.log(header);

    this.http
      .post<any>('http://localhost:3000/api/tasks', params, { headers: header })
      .subscribe({
        next: (data) => {
          console.log('data');
          console.log(data);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  getTask(id: any) {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    console.log(header);

    this.http
      .get<any>('http://localhost:3000/api/tasks/' + id, { headers: header })
      .subscribe({
        next: (data) => {
          this.task = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  getAllTasks() {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    this.http
      .get<any>('http://localhost:3000/api/tasks', { headers: header })
      .subscribe({
        next: (data) => {
          this.setTasks(data);
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  setTasks(tasks: any) {
    this.tasks = tasks;
  }
}
