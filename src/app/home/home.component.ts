import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  userData: {} = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkLogin().subscribe(data => {
      if (data) {
        this.userData = data.email;
        this.isLoggedIn = true;
        console.log(data);
      }
    });
  }
}
