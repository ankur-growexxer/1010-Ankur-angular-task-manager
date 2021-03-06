import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '1010-Ankur-angular-task-manager';
  token = localStorage.getItem('token') ? true : false;

  constructor(public readonly auth: AuthService) {}
}
