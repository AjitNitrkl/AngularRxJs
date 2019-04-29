import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {UserService} from '../service/user.service';
import {Observable, of} from 'rxjs';
import {user} from '../model/user';

import { MatSort, MatDialogConfig,MatDialog, MatSortable, MatTableDataSource } from '@angular/material';
import {UserDialogComponent} from '../user-dialog/user-dialog.component'



@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[]
})
export class UserComponent implements OnInit {

   dataSource =new MatTableDataSource();
  userdata:user[];
  delUser: user[];
 
  displayedColumns = ['name', 'email', 'phone', 'username', 'iconUrl', 'action','deleteAction'];

  constructor(private dialog: MatDialog, private service: UserService) { 
   
  }
  getUsersList(){
    //http call using button click
   this.service.getUsers().subscribe((res) =>{
    this.dataSource.data = res;
   })
  }

  ngOnInit() {

    // http call using fetch API
  //  this.service.getActUserData().subscribe(data =>{
  //   this.dataSource.data = data;
  // });
//http call using http client
  this.service.getUsers().subscribe((res) =>{
    this.dataSource.data = res;
    console.log("get data" +this.userdata);
   })
 }



  getUsers(){
    this.service.getUserData().subscribe(res =>  this.dataSource.data = res as user[]);
  }


  editUser(user:user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);

}

deleteUser(user:user){

  // need to invoke api to delete an user the subscribe get data api to get
 this.delUser =[{
    id: 2,
    name: "Sachin Tendulkar",
    username: "The Master",
    email: "sachin.ten@bcci.tv",
    address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031",
    iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDbrOYk8fvoeFfR41GfbWB5cbg1OmkPVNitJH0ROmZoUcYE2h'
}];

  of(this.delUser).subscribe( res =>{
    this.dataSource.data = res;
  })

}



}
///below is not used just for fyi
export class UserDataSource extends DataSource<any> {
  constructor(private service: UserService) {
    super();
  }
  connect(): Observable<user[]> {
    
    console.log("service returned data--"+JSON.stringify(this.service.getUserData()));
    return this.service.getUserData();
  }
  disconnect() {}
}
