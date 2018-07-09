import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { User } from '../../models/user';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "LoginPage"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[DataProvider]
})
export class LoginPage {
  private oUser = new User();
  public formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private data: DataProvider) {
    /*if(this.data.getAutenticated())
      this.navCtrl.push(TabsPage);*/
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
    this.oUser.email = this.formLogin.value.email;
    this.oUser.password = this.formLogin.value.password;
    let isAutenticated = this.data.signInWithEmail(this.oUser).then((response) => {
      if(isAutenticated){
        this.navCtrl.push(TabsPage);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  register(){
    this.navCtrl.push("RegisterPage");
    this.navCtrl.pop();
  }

}
