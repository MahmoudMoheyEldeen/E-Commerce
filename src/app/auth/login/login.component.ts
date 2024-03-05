import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
// AuthServiceService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpClient, AuthServiceService, MessageService],
})
export class LoginComponent {
  errorMessage: any = '';

  constructor(
    private _authservice: AuthServiceService,
    private messageService: MessageService,
    private _router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
  });

  submitLogin() {
    if (this.loginForm.valid) {
      this._authservice.logIn(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('this is the token', response.token);
          localStorage.setItem('userToken', response.token);
          this._authservice.decodeUserToken();
          if (response.message == 'success') {
            this._router.navigate(['/maincomponent']);
          }
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
          this.showError();
        },
      });
    }
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Account Created Successfully',
    });
  }
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: this.errorMessage,
    });
  }
}
