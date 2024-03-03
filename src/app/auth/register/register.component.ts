import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import {
  Message,
  MessageServiceService,
} from 'src/app/Services/message-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthServiceService, HttpClient, MessageService],
})
export class RegisterComponent {
  registerform: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });
  constructor(
    private _authService: AuthServiceService,
    private messageService: MessageService
  ) {}

  submitRegister() {
    console.log(this.registerform.value);
    console.log('asdasdasd');
    this._authService.signUp(this.registerform.value).subscribe({
      next: (response) => {
        console.log('myresponse', response);
        this.showSuccess();
      },
      error: (err) => {
        console.log('this is error ', err);
      },
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Account Created Successfully',
    });
  }
}
