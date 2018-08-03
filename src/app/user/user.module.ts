import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {UserComponent} from "./user.component";
import {UserRouting} from "./user.routes";
import { UserHomeComponent } from './user-home/user-home.component';
import {Profile} from "selenium-webdriver/firefox";
import {ProfileComponent} from "./profile/profile.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        UserComponent,
        UserHomeComponent,
        ProfileComponent
    ],
    imports: [
        UserRouting,
        CommonModule,
        FormsModule
    ],
    providers: []
})
export class UserModule { }
