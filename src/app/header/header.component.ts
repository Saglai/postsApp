import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSignedOut = true;

  constructor(private authService: AuthService) {
    this.authService.signInSubject.subscribe(isSignedIn => this.isSignedOut = !isSignedIn);
  }

  logOut() {
    this.authService.logOut();
  }
}
