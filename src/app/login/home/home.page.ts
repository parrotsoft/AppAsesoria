import {Component, OnInit} from '@angular/core';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { Parse } from 'parse';
import { environment } from '../../../environments/environment';
import {LoadingController, NavController} from "@ionic/angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formLogin: FormGroup;

  constructor(private facebook: Facebook, private nav: NavController, private fb: FormBuilder,
              public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.parseInitialize();
    this.buildForm();
  }

  buildForm() {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  parseInitialize() {
    Parse.initialize(environment.parse_app_id, environment.parse_js_key);
    Parse.serverURL = environment.parse_server_url;
  }

  loginOnFacebook() {
    const permissions = ['public_profile', 'email'];
    this.facebook.login(permissions).then(response => {

      const facebookAuthData = {
        id: response.authResponse.userID,
        access_token: response.authResponse.accessToken
      };
      const toLinkUser = new Parse.User();
      toLinkUser._linkWith('facebook', {authData: facebookAuthData}).then(
          userParse => {
            if (userParse.existed()) {
              this.facebook.api('/me?fields=name,email', permissions).then(user => {
                user.picture = 'https://graph.facebook.com/' + facebookAuthData.id + '/picture?type=large';
                userParse.set('username', user.name);
                userParse.set('name', user.name);
                userParse.set('email', user.email);
                userParse.set('picture', user.picture);
                userParse.save();
                /*this.nativeStorage.setItem('user_infor', {
                  name: user.name,
                  email: user.email,
                  picture: user.picture
                }).then(() => {

                });*/
                this.nav.navigateRoot('main');
              }), error => {
                alert('Error ' + error);
              };
            }
            this.nav.navigateRoot('main');
          }, error => {
            alert(error);
          }
      );
    }), error2 => {
      alert('Erro 2' + error2);
    }
  }

  onEnter() {
    try {
      this.loadingController.create({
        message: 'Cargando...'
      }).then(loading => {
        loading.present();
        Parse.User.logIn( this.formLogin.controls['username'].value, this.formLogin.controls['password'].value).then( async (resp) => {
          loading.dismiss();
          this.nav.navigateRoot('main');
        }).catch( async (error) => {
          loading.dismiss();
          alert('Error ' + error);
        })
      });
    }catch (e) {
      alert('Error ' + e)
    }
  }

  onEnterAnonimo() {
    try {
      this.loadingController.create({
        message: 'Cargando...'
      }).then( loading => {
        loading.present();
        const x = Math.floor((Math.random() * 1000));
        const user = {
          username: 'invitado'+ x,
          password: 'invitado'+ x,
          email: 'invitado'+x+'@helpme.com'
        };
        new Parse.User().signUp(user).then( user => {
          loading.dismiss();
          this.nav.navigateRoot('main');
        });
      });
    } catch (e) {
      alert('Error ' + e);
    }

  }

}
