import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email: ['',Validators.compose([Validators.maxLength(100),Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.required])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(10)])]
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

  signIn(){
    console.log(this.formLogin.value);
    console.log("sarita es bella durmiente. xd");
  }

}
