import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';
import { HomePage } from '../home/home';
import { TerminosPage } from '../terminos/terminos';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


	@ViewChild('username') username;
	@ViewChild('password') password;
  @ViewChild('firstname') firstname;
  @ViewChild('lastname') lastname;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Informacion',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
    //this.fire.auth.createUserWithEmailAndPassword(this.username.value + '@domian.xta', this.password.value)
    this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registrado!');
      this.navCtrl.setRoot( LoggedinPage );
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', this.username.value, this.password.value);
  }

  irLogin() {
    this.navCtrl.push(HomePage);
  }

  terminos() {
    this.navCtrl.push(TerminosPage);
  }


}
