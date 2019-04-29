import { Injectable, OnInit } from '@angular/core';
import {user} from '../model/user';
import {createHttpObservable} from '../common/util';
import { map ,tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of, Subject, timer} from 'rxjs';
import {Http} from '@angular/http';
import { HttpClient , HttpHeaders, HttpClientModule } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService  {

  private subject = new BehaviorSubject<user[]>([]);

  user$: Observable<user[]> = this.subject.asObservable();
  usersdata: user[];
  userObservableData: Observable<user[]>;

 
  constructor(private http: Http) { 
    
    this.initialize();
  }

  getUsers(){
   
    return this.http.get('http://localhost:9000/api/users').pipe( 
      tap(() => console.log('HTTP request executed')),
       map(res => {
        console.log("res----"+JSON.stringify(res.json()['payload']));
        return res.json()['payload'];
      }
      
      ));
  }

  initialize() {
     const http$ = createHttpObservable('/api/users');
      http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map(res => Object.values(res['payload']))
      )
      .subscribe(
          user => this.subject.next(user)
      );
  }

  getActUserData(){
    return this.user$;
  }


  getUserData(): Observable<user[]>{
    let fakeusers: user[] =  [
      {
        id: 0,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        },
        phone: "1-770-736-8031",
        iconUrl: 'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg'
    },{
    id: 1,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031",
    iconUrl: 'https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg'
    }
    ];
    console.log("actual users"+this.userObservableData);
    return of(fakeusers);
   
    //this.userObservableData;
  }

  getdata(): user[]{
    console.log("no fetch "+this.usersdata);
    return this.usersdata;
  }
}
