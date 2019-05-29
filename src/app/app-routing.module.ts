import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'main', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'denuncias-page', loadChildren: './denuncias-page/denuncias-page.module#DenunciasPagePageModule' },
  { path: 'foros-page', loadChildren: './foros-page/foros-page.module#ForosPagePageModule' },
  { path: 'principal-page', loadChildren: './principal-page/principal-page.module#PrincipalPagePageModule' },
  { path: 'solicita-ayuda-page/:id', loadChildren: './solicita-ayuda-page/solicita-ayuda-page.module#SolicitaAyudaPagePageModule' },
  { path: 'educativo-page', loadChildren: './educativo-page/educativo-page.module#EducativoPagePageModule' },
  // { path: 'chat', loadChildren: './denuncias-page/chat/chat.module#ChatPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
