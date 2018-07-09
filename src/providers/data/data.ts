import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private userFire: firebase.User;

  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe( respose => {
      this.userFire = respose;
    });
  }

  public getAutenticated(): boolean{
    return this.userFire != null;
  }

  public signInWithEmail(oUser: User){
    return this.auth.auth.signInWithEmailAndPassword(oUser.email,oUser.password);
  }

  public registerWithEmailAndPassword(oUser: User){
    return this.auth.auth.createUserWithEmailAndPassword(oUser.email,oUser.password);
  }

}
