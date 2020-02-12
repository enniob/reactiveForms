import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkLogin().subscribe(data => {
      if (data) {
        this.userData = data.email;
        console.log(data);
      }
    });
  }

  logoutUser() {
    this.authService.logout().then(response => {
      console.log(response);
      this.userData = '';
    })
    .catch(error => {
      console.log(error);
    });
  }
}
