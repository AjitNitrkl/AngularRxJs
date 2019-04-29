import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {CourseComponent} from "./course/course.component";

import {HttpClientModule} from "@angular/common/http";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MaterialModule} from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserComponent } from './user/user.component';

import {UserService} from './service/user.service'
import {HttpModule} from '@angular/http';
import { UserDialogComponent } from './user-dialog/user-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CourseComponent,
        CoursesCardListComponent,
        CourseDialogComponent,
        LoginComponent,
        RegisterComponent,
        UserComponent,
        UserDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpModule
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent],
    entryComponents: [CourseDialogComponent, UserDialogComponent]
})
export class AppModule {
}
