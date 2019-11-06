import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DenunciasPagePage } from './denuncias-page.page';
import {ChatPage} from "./chat/chat.page";

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
  declarations: [DenunciasPagePage, ChatPage],
  entryComponents: [ ChatPage]
})
export class DenunciasPagePageModule {}
