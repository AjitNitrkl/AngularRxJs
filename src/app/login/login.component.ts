import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {user} from '../model/user';
import {createHttpObservable} from '../common/util';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import {UserService} from '../service/user.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[]
})
export class LoginComponent implements OnInit {

  constructor() {
} 

  
  ngOnInit() {
   // this.service.ngOnInit();
   
  }
  submit(form: NgForm){
  // this.service.getdata();
  }

}
