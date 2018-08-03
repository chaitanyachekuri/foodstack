import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";
import {AuthService} from "../Services/auth.service";
import {StorageService} from "../Services/storage.service";
import {dbService} from "../Services/db.service";
import {P} from "@angular/core/src/render3";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    
    constructor(private router: Router, public auth: AuthService, private storage: StorageService, private db: dbService) { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    login(val){
        if(val === 'google') {
            this.auth.doGoogleLogin().then(res => {
                console.log(res);
                this.storage.setUserDetails(res);
                this.db.getUserDetails(res.user.uid).subscribe(val =>{
                    if(val.length == 0){
                        this.register(res.user);
                    }else{
                        this.storage.setLocalUserDetails(val[0]);
                        this.router.navigate(['/user/home'])
                    }
                })

            }).catch(err => {
                console.log(err);
            })
        }
    }

    register(user){
        let sendObj = {
            name: user.displayName,
            email: user.email,
            imageUrl: user.photoURL,
            uniqueId:user.uid
        }

        this.db.insertUserDetails(sendObj).then(res =>{
            console.log(res);
            this.router.navigate(['/user/home'])
        }).catch(err =>{
            console.log(err);
        })
    }



}
