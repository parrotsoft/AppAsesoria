import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parse } from 'parse';
import {environment} from "../../environments/environment";
import {LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor( private fb: FormBuilder,
               public loadingController: LoadingController,
               private nav: NavController) { }

  ngOnInit() {
    this.buildForm();
    this.parseInitialize();
  }

  parseInitialize() {
    Parse.initialize(environment.parse_app_id, environment.parse_js_key);
    Parse.serverURL = environment.parse_server_url;
  }

  buildForm() {
    this.formRegistro = this.fb.group({
      username: ['', [ Validators.required]],
      phone: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister() {
    try {
      this.loadingController.create({
        message: 'Cargando...'
      }).then( loading => {
        loading.present();
        new Parse.User().signUp(this.formRegistro.value).then( user => {
          loading.dismiss();
          this.nav.navigateRoot('main');
          // alert(user.get('username'));
        });
      });


    } catch (e) {
      alert('Error ' + e);
    }
  }

}
