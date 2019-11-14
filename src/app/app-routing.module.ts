import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'main',
  loadChildren: () => import('./helpers/helpers.module').then(m => m.HelpersModule) },
  { path: 'denuncias-page',
  loadChildren: () => import('./pages/denuncias-page/denuncias-page.module').then(m => m.DenunciasPagePageModule) },
  { path: 'foros-page',
  loadChildren: () => import('./pages/foros-page/foros-page.module').then(m => m.ForosPagePageModule) },
  { path: 'principal-page',
  loadChildren: () => import('./pages/principal-page/principal-page.module').then(m => m.PrincipalPagePageModule) },
  { path: 'solicita-ayuda-page/:id',
  loadChildren: () => import('./pages/solicita-ayuda-page/solicita-ayuda-page.module').then(m => m.SolicitaAyudaPagePageModule) },
  { path: 'educativo-page',
  loadChildren: () => import('./pages/educativo-page/educativo-page.module').then(m => m.EducativoPagePageModule) },
  // { path: 'chat', loadChildren: './denuncias-page/chat/chat.module#ChatPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
