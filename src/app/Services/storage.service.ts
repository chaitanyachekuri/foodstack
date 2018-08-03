import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class StorageService {
    constructor(private storage: LocalStorageService,
                private session: SessionStorageService) { }
    setUserDetails(det){
        this.session.store('userDetails',det)
    }

    getUserDetails(){
       return this.session.retrieve('userDetails');
    }

    getLocalUserDetails(){
        return this.session.retrieve('localUserDetails');
    }

    setLocalUserDetails(det){
        this.session.store('localUserDetails',det)
    }

    destroyAll() {
        this.session.clear();
    }

}
