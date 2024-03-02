import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthServiceService, HttpClient],
})
export class RegisterComponent {
  registerform: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    rePassword: new FormControl(),
    phone: new FormControl(),
  });
  // registerform: FormGroup = new FormGroup({
  //   name: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(25),
  //   ]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^[a-z][a-z0-9]{6-20}$/),
  //   ]),
  //   rePassword: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^[a-z][a-z0-9]{6-20}$/),
  //   ]),
  //   phone: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^01[0125][0-9]{8}$/),
  //   ]),
  // });
  constructor(private _authService: AuthServiceService) {}

  submitRegister() {
    console.log('asdasdasd');
    this._authService.signUp(this.registerform.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
