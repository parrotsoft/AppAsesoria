import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Parse } from 'parse';
import {ElementRef, ViewChild} from '@angular/core';

import Talk from 'talkjs';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  @Input('id') id?: string;
  @ViewChild('talkjscontainer') myElement: ElementRef;

  denuncia: any;
  talkSession: any;

  constructor(private modalCtrl:ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.id = this.navParams.get('id');
    this.parseInitialize();
    this.getData(this.id, () => {
      this.initChat();
    });
  }

  parseInitialize() {
    Parse.initialize(environment.parse_app_id, environment.parse_js_key);
    Parse.serverURL = environment.parse_server_url;
  }

  getData(id: any, callback) {
    const Denuncias = Parse.Object.extend('Denuncias');
    const query = new Parse.Query(Denuncias);
    query.get(id).then((denuncia) => {
      this.denuncia = denuncia;
      callback();
    }, error => {
      alert(error);
    });
  }

  initChat() {
    Talk.ready.then(() => {
      var me = new Talk.User({
        id: this.denuncia.id,
        name: this.denuncia.get('username'),
        email: this.denuncia.get('email'),
        photoUrl: 'assets/images/default-avatar.jpg',
        welcomeMessage: 'Hola me puedes ayudar...?'
      });
      this.talkSession = new Talk.Session({
        appId: environment.TalkappId,
        me: me
      });
      this.getUser(this.denuncia.get('tomadapor').id, (user) => {
        var other = new Talk.User({
          id: user.id,
          name: user.get('name'),
          email: user.get('email'),
          photoUrl: user.get('avatar').url(),
          welcomeMessage: 'Bienvenido soy reprecentante de ' + user.get('entidad')
        });

        var conversation = this.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
        conversation.setParticipant(me);
        conversation.setParticipant(other);
        var inbox = this.talkSession.createInbox({selected: conversation});
        inbox.mount(document.getElementById("talkjs-container"));
      });
    });
  }

  getUser(id: string, callback) {
    const Denuncias = Parse.Object.extend('User');
    const query = new Parse.Query(Denuncias);
    query.get(id).then(obj => {
      callback(obj)
    });
  }

  onAtras() {
    this.modalCtrl.dismiss();
  }

}
