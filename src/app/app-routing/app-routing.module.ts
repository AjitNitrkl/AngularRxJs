import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
//import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import {HomeComponent} from "../home/home.component"
import {AboutComponent} from "../about/about.component";
import {CourseComponent} from "../course/course.component";
import {RegisterComponent} from '../register/register.component'
import { UserComponent } from '../user/user.component';
import { CoursesCardListComponent} from '../courses-card-list/courses-card-list.component'

const appRoutes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: "login", 
  component: LoginComponent
  },
  { path: "register", 
  component: RegisterComponent
  },
  {
    path: "users",
    component: UserComponent

},
{
    path: "about",
    component: AboutComponent
},
{
    path: 'courses/:id',
    component: CourseComponent
},
{
    path: 'courses',
    component: CoursesCardListComponent
},
{
    path: "**",
    redirectTo: '/'
}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
