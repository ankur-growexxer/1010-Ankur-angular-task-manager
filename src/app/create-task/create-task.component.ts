import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { TaskService } from '../shared/services/task.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private task: TaskService
  ) {}

  ngOnInit(): void {}
  createForm = this.fb.group({
    description: ['', [Validators.required]],
    status: ['', [Validators.required]],
  });
  createTask() {
    this.task.create(this.createForm.value);
  }
}
