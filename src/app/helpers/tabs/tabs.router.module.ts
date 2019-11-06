import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'principal',
        children: [
          {
            path: '',
            loadChildren: '../principal-page/principal-page.module#PrincipalPagePageModule'
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../perfil-page/perfil-page.module#PerfilPagePageModule'
          }
        ]
      },
      {
        path: 'denuncias',
        children: [
          {
            path: '',
            loadChildren: '../denuncias-page/denuncias-page.module#DenunciasPagePageModule'
          }
        ]
      },
      {
        path: 'foros',
        children: [
          {
            path: '',
            loadChildren: '../foros-page/foros-page.module#ForosPagePageModule'
          }
        ]
      },
      {
        path: 'educativo',
        children: [
          {
            path: '',
            loadChildren: '../educativo-page/educativo-page.module#EducativoPagePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/principal',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
