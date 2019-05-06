import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DenunciasPagePage } from './denuncias-page.page';

const routes: Routes = [
  {
    path: '',
    component: DenunciasPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DenunciasPagePage]
})
export class DenunciasPagePageModule {}
