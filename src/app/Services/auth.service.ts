import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService{

    constructor(public afAuth: AngularFireAuth){
    }

    signOut(){
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signOut().then(res =>{
                resolve(res);
            }).catch(err =>{
                reject(err);
            })
        })
    }
    doGoogleLogin(){
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                })
        })
    }

}