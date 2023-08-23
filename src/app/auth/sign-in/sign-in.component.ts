import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SignInModel } from '../auth.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  failMessage? = '';
  signInForm = new FormGroup({
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

  submitSignIn() {
    const signInValues: SignInModel = this.signInForm.value as SignInModel;
    const operationResult = this.authService.signIn(signInValues);

    if (operationResult.isSuccess === true) {
      this.router.navigateByUrl('/posts');
    } else {
      this.failMessage = operationResult.failMessage;
      setTimeout(() => {this.failMessage = undefined}, 5000);
    }
  }

  get login() { return this.signInForm.get('login'); }
  get password() { return this.signInForm.get('password'); }
}
