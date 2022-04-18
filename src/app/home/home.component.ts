import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../shared/services/task.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public readonly taskService: TaskService
  ) {}
  tasks: any;

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const headers = {
      Authorization: bearer,
      'Content-Type': 'application/json',
    };

    this.http
      .get('http://localhost:3000/api/tasks', { headers: headers })
      .subscribe((Response) => {
        console.log('getdata', Response);
        this.tasks = Response;
      });
    this.taskService.getAllTasks();
  }
}
