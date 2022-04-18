import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  constructor(
    public readonly authService: AuthService,
    public readonly userService: UserService
  ) {}

  editProfile = new FormGroup({
    name: new FormControl(this.authService?.userInfo?.name, [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl(this.authService?.userInfo?.age, [
      Validators.required,
      Validators.pattern('^[1-9]{1}[0-9]{1}$'),
    ]),
  });

  ngOnInit(): void {}

  onEditProfile() {
    this.userService.updateUser(this.editProfile.value);
  }
}
