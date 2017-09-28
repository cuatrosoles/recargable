import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { TerminosPage } from '../pages/terminos/terminos';
import { RecuperaPage } from '../pages/recupera/recupera';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';

import { Component } from '@angular/core';

Component({
  templateUrl: 'app.html'
})

export const firebaseConfig = {
    apiKey: "AIzaSyBJ51JCZ5jz4ySNvDdoyEuCxFSS_BEOGT8",
    authDomain: "recargableapp.firebaseapp.com",
    databaseURL: "https://recargableapp.firebaseio.com",
    projectId: "recargableapp",
    storageBucket: "recargableapp.appspot.com",
    messagingSenderId: "924921720926"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    TerminosPage,
    RecuperaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    TerminosPage,
    RecuperaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
