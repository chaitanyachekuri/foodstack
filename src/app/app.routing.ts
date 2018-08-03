import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {PresentationComponent} from "./presentation/presentation.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserModule} from "./user/user.module";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./Services/authGaurd.service";

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    {path:'landing', component: PresentationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path:'user', component: AppComponent, canActivate:[AuthGuard], loadChildren:'app/user/user.module#UserModule'}
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: true
});
