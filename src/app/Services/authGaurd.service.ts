import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private storage: StorageService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
      if(this.isLoggedIn()){
          return true;
      }
      else{
          this.router.navigate(['/landing']);
          return false;
      }
    }

    isLoggedIn(): boolean{
        return !(!this.storage.getUserDetails());
    }
}