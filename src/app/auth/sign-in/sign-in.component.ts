import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SignInModel } from '../auth.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router) {}

  submitSignIn() {
    const signInValues: SignInModel = this.signInForm.value as SignInModel;
    const operationResult = this.authService.login(signInValues);

    if (operationResult.isSuccess === true) {
      this.router.navigateByUrl('/posts');
    }
  }
}
