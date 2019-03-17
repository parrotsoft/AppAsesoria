import { RegistroPageModule } from './registro/registro.module';
import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroPage } from './registro/registro.page';
import { PrincipalPagePageModule } from './principal-page/principal-page.module';
import { PrincipalPagePage } from './principal-page/principal-page.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomePageModule,
    RegistroPageModule,
    PrincipalPagePageModule,
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'registro', component: RegistroPage },
      { path: 'principal', component: PrincipalPagePage },
      { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
    ])
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
