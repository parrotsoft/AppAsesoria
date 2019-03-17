import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitaAyudaPagePage } from './solicita-ayuda-page.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitaAyudaPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SolicitaAyudaPagePage]
})
export class SolicitaAyudaPagePageModule {}
