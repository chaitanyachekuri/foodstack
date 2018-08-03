import {Injectable} from "@angular/core";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {rolesModel} from "../Model/roles.class";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";

@Injectable()
export class dbService{
    constructor(private db: AngularFirestore){
    }

    getRoles(){
     const col: AngularFirestoreCollection<any> = this.db.collection('roles');
     col.valueChanges().subscribe(res =>{
         console.log(res);
     })
    }

    getUserDetails(uniqueId){
        const col: AngularFirestoreCollection<any> = this.db.collection('users', ref => ref.where('uniqueId','==', uniqueId))
        return col.valueChanges();
    }

    insertUserDetails(obj) {
        const col: AngularFirestoreCollection<any> = this.db.collection('users');
        return col.add(obj)
    }

    getDemo(){
         const col: AngularFirestoreCollection<any> = this.db.collection('demo');
         return col.valueChanges();
    }

    insertDemo(object){
        const col: AngularFirestoreCollection<any> = this.db.collection('demo');
       return col.add(object);
    }

}