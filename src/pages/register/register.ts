import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[DataProvider]
})
export class RegisterPage {
  private oUser: User = new User();

  public formRegister: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private data: DataProvider) {
    this.formRegister = this.formBuilder.group({
      email: ['',Validators.compose([Validators.maxLength(100),Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),Validators.required])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(10)])],
      re_password: ['',Validators.compose([Validators.required,Validators.minLength(10)])],
      firstname:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      lastname:['',Validators.compose([Validators.required,Validators.minLength(5)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    this.oUser.email = this.formRegister.value.email;
    this.oUser.password = this.formRegister.value.password;
    this.oUser.firstname = this.formRegister.value.firstname;
    this.oUser.lastname = this.formRegister.value.lastname;
    this.data.registerWithEmailAndPassword(this.oUser).then(response => {
      console.log(response.user);
      if(response)
        this.navCtrl.pop();
      
    }).catch(error => {
      console.log(error);
    });

  }
}
