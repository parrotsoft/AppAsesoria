import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parse } from 'parse';
import {environment} from "../../../environments/environment";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoadingController, NavController} from "@ionic/angular";
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-solicita-ayuda-page',
  templateUrl: './solicita-ayuda-page.page.html',
  styleUrls: ['./solicita-ayuda-page.page.scss'],
})
export class SolicitaAyudaPagePage implements OnInit {

  id :string;
  title: string;
  imgHeader: string;
  currentUser: any = {};
  archivoBase64: string;
  gravando = false;

  formDenuncia: FormGroup;

    constructor(private route: ActivatedRoute, private fb: FormBuilder, private nav: NavController,
                private fileChooser: FileChooser,
                public base64: Base64,
                public filePath: FilePath,
                public loadingController: LoadingController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    switch (this.id) {
      case '1':
        this.title = "Abuso Sexual";
        this.imgHeader = "../../assets/images/sexual-assault.png";
        break;
      case '2':
        this.title = "Explotación Infantil";
        this.imgHeader = "../../assets/images/sexual-assault.png";
        break;
      case '3':
        this.title = "Bullying/Ciberbullying";
        this.imgHeader = "../../assets/images/sexual-assault.png";
        break;
      case '4':
        this.title = "Drogadicción";
        this.imgHeader = "../../assets/images/sexual-assault.png";
        break;
      case '5':
        this.title = "Policia de infacia y adolecencia";
        this.imgHeader = "../../assets/images/sexual-assault.png";
        break;
    }

    this.buildForm();
    this.parseInitialize();

  }

  parseInitialize() {
    Parse.initialize(environment.parse_app_id, environment.parse_js_key);
    Parse.serverURL = environment.parse_server_url;
    this.currentUser = Parse.User.current();
  }

  buildForm() {
    this.formDenuncia = this.fb.group({
      direccion: ['', [ Validators.required]],
      descripcion: ['', [ Validators.required ]],
      username: ['', [ Validators.required ]],
      email: [ '', [ Validators.required ]],
      tipo: [ '', [ Validators.required ]],
      archivo: ['']
    });
  }

  seleccionarArchivo() {
    this.fileChooser.open().then( uri => {
      this.filePath.resolveNativePath(uri).then(file => {
        let filePath: string = file;
        if (filePath) {
          this.base64.encodeFile(filePath).then((base64File: string) => {
            this.archivoBase64 = base64File;
          }).catch(error => { alert('Error ' + error); })
        }
      }).catch(e => { alert('Error ' + e); } )
    }).catch(error => {
        alert('Error al convertir en base64 '+ error);
      });
  }

  onSendDenuncia() {
        try {
            this.loadingController.create({
                message: 'Enviando...'
            }).then(loading => {
                loading.present();
                this.formDenuncia.controls['username'].setValue(this.currentUser.get('username'));
                this.formDenuncia.controls['email'].setValue(this.currentUser.get('email'));
                this.formDenuncia.controls['tipo'].setValue(this.title);
                this.formDenuncia.controls['archivo'].setValue(this.archivoBase64);
                const denuncia = Parse.Object.extend("Denuncias");
                let denuciaObj = new denuncia();
                denuciaObj.save(this.formDenuncia.value).then(resp => {
                    loading.dismiss();
                    alert('Denuncia registrada, Gracias!');
                    this.nav.navigateRoot('main');
                }, error => {
                    alert('Error ' + error);
                });
            });
        } catch (e) {
            alert('Error ' + e);
        }
  }

}
