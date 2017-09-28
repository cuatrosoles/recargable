import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';
import { RegisterPage } from '../register/register';
import { TerminosPage } from '../terminos/terminos';
import { AuthProvider } from './../../providers/auth/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') username;
	@ViewChild('password') password;

  public userProfile:any = null;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {

    firebase.auth().onAuthStateChanged( user => {
    if (user) {
      console.log(user);
      this.userProfile = user;
      this.alert('Has ingresado correctamente');
      this.navCtrl.setRoot( LoggedinPage );

    } else {
      console.log("No hay usuarios aqui");
    }
  });

  }

ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Informacion',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {
    //this.fire.auth.signInWithEmailAndPassword(this.username.value + '@domian.xta', this.password.value)
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Has ingresado correctamente');
      this.navCtrl.setRoot( LoggedinPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log('Would sign in with ', this.username.value, this.password.value);
  }

  register() {
  	this.navCtrl.push(RegisterPage);
  }

  terminos() {
    this.navCtrl.push(TerminosPage);
  }

  googleLogin():void {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider).then( () => {
    firebase.auth().getRedirectResult().then( result => {
      // This gives you a Google Access Token.
      // You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token, user);

    }).catch(function(error) {
      // Handle Errors here.
      console.log(error.message);
    });
  });
}

facebookLogin(): void {
    this.authProvider.facebookLogin();
  }

}
