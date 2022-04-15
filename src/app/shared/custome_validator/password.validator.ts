import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(password: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = password.test(control.value);
    return forbidden ? null : { forbiddenName: { value: control.value } };
  };
}
