import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {UserHomeComponent} from "./user-home/user-home.component";


const routes: Routes =[
    {path:'home', component: UserHomeComponent},
];

export const UserRouting = RouterModule.forChild(routes);

