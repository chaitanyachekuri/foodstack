import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {UserHomeComponent} from "./user-home/user-home.component";
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes =[
    {path:'home', component: ProfileComponent},
];

export const UserRouting = RouterModule.forChild(routes);

