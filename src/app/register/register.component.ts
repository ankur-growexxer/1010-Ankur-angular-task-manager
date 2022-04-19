import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfirmPasswordValidator } from '../shared/custome_validator/confirm-password.validator';
import { forbiddenNameValidator } from '../shared/custome_validator/password.validator';
import { AuthService } from '../shared/services/auth.service';

// import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // profileForm: FormGroup;
  // submitted = false;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {}
  registerForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[^ @]*@[^ @]*'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          forbiddenNameValidator(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      confirmpassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          forbiddenNameValidator(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      age: [
        null,
        [Validators.required, Validators.pattern('^(?:1[8-9]|[2-5][0-9]|60)$')],
      ],
    },
    { validators: ConfirmPasswordValidator() }
  );

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmpassword() {
    return this.registerForm.get('confirmpassword');
  }
  get age() {
    return this.registerForm.get('age');
  }

  onregister() {
    this.auth.setdata(this.registerForm.value);
  }
}
