import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SignUpModel } from '../auth.model';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private _snackBar: MatSnackBar
    ) {}

  submitSignUp() {
    const signUpValues: SignUpModel = this.signUpForm.value as SignUpModel;
    const operationResult = this.authService.signUp(signUpValues);
    
    if (operationResult.isSuccess === true) {
      this.router.navigateByUrl('/posts');
      return
    } 

    if (operationResult.failMessage) {
      this.openSnackBar(operationResult.failMessage)
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'ok', {
      duration: 5000
    });
  }

  get login() { return this.signUpForm.get('login'); }
  get password() { return this.signUpForm.get('password'); }
}
