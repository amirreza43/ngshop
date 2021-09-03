import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import User from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: User[] = [
    {
    name: 'Amir',
    favourites: [],
    like: []
    },
    {
    name: 'Kargen',
    favourites: [],
    like: []
    },
    {
    name: 'Kay',
    favourites: [],
    like: []
    }
    ];
  private activeUser: User = this.users[0];

  constructor() { }

  getActiveUser(): Observable<User>{
    return of(this.activeUser);
  }

  setActiveUser(name: string): void{
    this.users.map((user)=>{
      if(user.name === name){
        this.activeUser = user
      }
    })
  }

  createUser(user: User){
    this.users.push(user)
  }

  login(name: string){
    for(const i of this.users){
      if(i.name === name){
        this.setActiveUser(name)
      }
    }
    return 'User not found!'
  }

  getAllUsers(): Observable<User[]>{
    return of(this.users)
  }

}
