import { Component } from '@angular/core';

import { AuthService } from './login/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveFormTutorial';
  isLogedIn = false;

  constructor(private authService: AuthService) {
    this.authService.checkLogin().subscribe(data => {
      if (data) {
        this.isLogedIn = true;
      }
    });
  }

  logoutUser() {
    this.authService.logout().then(response => {
      console.log(response);
      this.isLogedIn = false;
    })
    .catch(error => {
      console.log(error);
    });
  }
}
