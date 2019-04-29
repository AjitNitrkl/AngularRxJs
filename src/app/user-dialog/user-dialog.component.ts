import { Component, OnInit, Inject } from '@angular/core';
import {UserService} from '../service/user.service'
import {user} from '../model/user';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import * as moment from 'moment';



@Component({
  selector: 'user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  form: FormGroup;
  user: user

  constructor(private userService: UserService, @Inject(MAT_DIALOG_DATA)  user:user,
  private fb: FormBuilder,
  private dialogRef: MatDialogRef<UserDialogComponent>, ) { 
    console.log("user data ----"+JSON.stringify(user));

    this.form = fb.group({
      name: [user.name, Validators.required],
      email: [user.email, Validators.required],
      releasedAt: [moment(), Validators.required],
      phone: [user.phone,Validators.required]
  });

  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
}


}
