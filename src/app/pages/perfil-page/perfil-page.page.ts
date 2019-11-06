import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import { Parse } from 'parse';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.page.html',
  styleUrls: ['./perfil-page.page.scss'],
})
export class PerfilPagePage implements OnInit {

  currentUser: any = {};

  constructor(private nav: NavController) { }

  ngOnInit() {
    this.parseInitialize();
    this.currentUser = Parse.User.current();
  }

  parseInitialize() {
    Parse.initialize(environment.parse_app_id, environment.parse_js_key);
    Parse.serverURL = environment.parse_server_url;
  }

  onLogOut() {
    Parse.User.logOut().then(() => {
      this.nav.navigateRoot('');
    });
  }

}
