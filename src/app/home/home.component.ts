import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(data => {
      console.log(data);
    });
  }
}
