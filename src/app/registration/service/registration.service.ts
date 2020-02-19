import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private afAuth: AngularFireAuth) { }

  registerAccount (email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
