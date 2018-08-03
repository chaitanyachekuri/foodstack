import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {PresentationModule} from "./presentation/presentation.module";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { UserComponent } from './user/user.component';
import {AuthGuard} from "./Services/authGaurd.service";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthService} from "./Services/auth.service";
import {StorageService} from "./Services/storage.service";
import {EventEmitterService} from "./Services/event.emitter.service";
import {Ng2Webstorage} from "ngx-webstorage";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {dbService} from "./Services/db.service";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRouting,
        PresentationModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        Ng2Webstorage
    ],
    providers: [AuthGuard, AuthService, StorageService, EventEmitterService, dbService],
    bootstrap: [AppComponent]
})
export class AppModule { }
