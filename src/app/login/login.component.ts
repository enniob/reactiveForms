import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  doLogin(formData: FormGroup) {
    if (formData.valid) {
      this.authService.emailLogin(formData.value.userName, formData.value.password)
        .then(loginResponse => {
          console.log(loginResponse);
          this.router.navigate(['/']);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
