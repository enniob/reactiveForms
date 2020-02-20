import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from './service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required]))
  });

  constructor(private regService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  register(formData: FormGroup) {
    if (formData.valid) {
      this.regService.registerAccount(formData.value.userName, formData.value.password).then(resp => {
        console.log(resp);
        this.router.navigate(['/']);
      });
    }
  }
}
