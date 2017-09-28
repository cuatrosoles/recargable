import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoggedinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

	email: string;
  public userProfile: any;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public afA: AngularFireAuth, public authProvider: AuthProvider) {
 	this.email = fire.auth.currentUser.email;
  this.userProfile = fire.auth.currentUser;
  }

  ionViewDidLoad() {
    this.userProfile = this.authProvider.getUser();
    console.log('ionViewDidLoad LoggedinPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Informacion',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  logout(){
    this.afA.auth.signOut().then(() => {
      console.log('usuario deslogueado', this.fire.auth.currentUser);
      this.alert('Has cerrado la sesion correctamente');
      this.navCtrl.setRoot( HomePage );
      // user is logged out
    });
}

}
