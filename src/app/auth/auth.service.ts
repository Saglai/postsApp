import { Injectable } from '@angular/core';
import { SignInModel, OperationResult, SignUpModel } from './auth.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
  signInSubject: BehaviorSubject<boolean>

  constructor() {
    this.signInSubject = new BehaviorSubject(Boolean(localStorage.getItem('_isSignedIn')));
  }

  signUp(signUpData: SignUpModel) {
    const userPassword = localStorage.getItem(signUpData.login);

    if (userPassword) {
      return { isSuccess: false, failMessage: 'This user already exists' };
    }

    localStorage.setItem('_isSignedIn', 'true');
    this.signInSubject.next(true);

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
    this.signInSubject.next(true);
    return { isSuccess: true };
  }

  
  get isSignedIn() : boolean {
    return Boolean(localStorage.getItem('_isSignedIn'));
  }

  logOut(): void {
    localStorage.removeItem('_isSignedIn');
    this.signInSubject.next(false);
  }
}