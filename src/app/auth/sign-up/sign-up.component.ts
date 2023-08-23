import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SignUpModel } from '../auth.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  failMessage? = '';

  signUpForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)
    ])
  })

  constructor(
    private authService: AuthService,
    private router: Router) {}

  submitSignUp() {
    const signUpValues: SignUpModel = this.signUpForm.value as SignUpModel;
    const operationResult = this.authService.signUp(signUpValues);
    
    if (operationResult.isSuccess === true) {
      this.router.navigateByUrl('/posts');
    } else {
      this.failMessage = operationResult.failMessage;
      setTimeout(() => {this.failMessage = undefined}, 5000);
    }
  }

  get login() { return this.signUpForm.get('login'); }
  get password() { return this.signUpForm.get('password'); }
}
