import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  emailLogin(userName: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(userName, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  checkLogin() {
    return this.afAuth.authState;
  }
}
