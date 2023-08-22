import { Injectable } from '@angular/core';
import { SignInModel, OperationResult, SignUpModel } from './auth.model';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

  register(model: SignUpModel) {
    
  } 

  login(signInData: SignInModel): OperationResult {
    const userPassword = localStorage.getItem(signInData.login);

    if (!userPassword) {
      return { isSuccess: false, failMessage: 'Incorrect the login' };
    }

    if (userPassword !== signInData.password) {
      return { isSuccess: false, failMessage: 'Incorrect the password' };
    }

    return { isSuccess: true };
  }
}