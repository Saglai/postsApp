import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SignUpModel } from '../auth.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router) {}

  submitSignUp() {
    const signUpValues: SignUpModel = this.signUpForm.value as SignUpModel;
    const operationResult = this.authService.signUp(signUpValues);
    
    if (operationResult.isSuccess === true) {
      this.router.navigateByUrl('/posts');
    }
  }
}
