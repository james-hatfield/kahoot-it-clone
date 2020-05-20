import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'kahoot-it-clone-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUser = this.authService.currentUser;
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
