import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private user= new BehaviorSubject<string>('Jhon');
private userName = this.user.asObservable();
  constructor() { }
  getUserName():Observable<string>{
    return this.userName;
  }
  setUserName(name:string){
    return this.user.next(name);
  }

  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}