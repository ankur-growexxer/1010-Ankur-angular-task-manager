import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../shared/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  task: any;
  idFromRoute: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public readonly authService: AuthService,
    public readonly taskService: TaskService
  ) {}

  editTask = new FormGroup({
    description: new FormControl(this.taskService?.tasks?.description, [
      Validators.required,
    ]),
    status: new FormControl(this.taskService?.tasks?.status, [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idFromRoute = routeParams.get('id');
    this.taskService.getTask(this.idFromRoute);
  }

  onEditTask() {
    this.taskService.update(this.editTask.value, this.taskService.task._id);
  }
}
