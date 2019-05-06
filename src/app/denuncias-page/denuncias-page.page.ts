import { Component, OnInit } from '@angular/core';
import { Parse } from 'parse';
import {environment} from "../../environments/environment";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-denuncias-page',
  templateUrl: './denuncias-page.page.html',
  styleUrls: ['./denuncias-page.page.scss'],
})
export class DenunciasPagePage implements OnInit {

  misDenuncias: any[];
  currentUser: any = {};

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.parseInitialize();
    this.getMisDenuncias();
  }

  parseInitialize() {
    Parse.initialize(environment.parse_app_id, environment.parse_js_key);
    Parse.serverURL = environment.parse_server_url;
    this.currentUser = Parse.User.current();
  }

  getMisDenuncias() {
    try {
      this.loadingController.create({
        message: 'Cargando...'
      }).then(loading => {
        loading.present();
        const denuncia = Parse.Object.extend('Denuncias');
        const query = new Parse.Query(denuncia);
        query.equalTo('email', this.currentUser.get('email'));
        query.find().then( (obj) => {
          loading.dismiss();
          this.misDenuncias = obj;
        });
      });
    } catch (e) {
      alert('Error ' + e);
    }
  }

  onAbreAcrhivo(archivo: string) {
    fetch(archivo).then( res => res.blob()).then(blob => {
      const file = new File([blob], "File name");
    });
  }



}
