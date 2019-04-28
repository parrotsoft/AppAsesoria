import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parse } from 'parse';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formRegistro = this.fb.group({
      nombre: ['', [ Validators.required]],
      telefono: ['', [ Validators.required ]],
      correo: ['', [ Validators.required, Validators.email ]]
    });
  }

  onRegister() {
    alert(JSON.stringify(this.formRegistro.value));
  }

}
