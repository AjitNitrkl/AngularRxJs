import {Component, OnInit} from '@angular/core';
import {StoreService} from './service/store.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{


    constructor(private store:StoreService, private service: UserService) {

    }

    ngOnInit() {
        this.store.init();
       // this.service.ngOnInit();
    }

}
