import { Injectable } from '@angular/core';
import { SignInModel, OperationResult, SignUpModel } from './auth.model';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

  signUp(signUpData: SignUpModel) {
    const userPassword = localStorage.getItem(signUpData.login);

    if (userPassword) {
      return { isSuccess: false, failMessage: 'This user already exists' };
    }

    localStorage.setItem('_isSignedIn', 'true')
    localStorage.setItem(signUpData.login, signUpData.password);
    return { isSuccess: true };
  } 

  signIn(signInData: SignInModel): OperationResult {
    const userPassword = localStorage.getItem(signInData.login);

    if (!userPassword) {
      return { isSuccess: false, failMessage: 'Incorrect the login' };
    }

    if (userPassword !== signInData.password) {
      return { isSuccess: false, failMessage: 'Incorrect the password' };
    }

    localStorage.setItem('_isSignedIn', 'true');
    return { isSuccess: true };
  }

  
  public get isSignedIn() : boolean {
    return Boolean(localStorage.getItem('_isSignedIn'));
  }
}