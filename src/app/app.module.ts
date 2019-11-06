import { RegistroPageModule } from './login/registro/registro.module';
import { HomePageModule } from './login/home/home.module';
import { HomePage } from './login/home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroPage } from './login/registro/registro.page';
import { PrincipalPagePageModule } from './pages/principal-page/principal-page.module';
import { PrincipalPagePage } from './pages/principal-page/principal-page.page';
import { Facebook } from "@ionic-native/facebook/ngx";
import { ReactiveFormsModule } from "@angular/forms";
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

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
    ReactiveFormsModule,
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
    Facebook,
    FileChooser,
    Base64,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
