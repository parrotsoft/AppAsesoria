import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.page.html',
  styleUrls: ['./principal-page.page.scss'],
})
export class PrincipalPagePage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

}
