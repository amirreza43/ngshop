import { Injectable } from '@angular/core';
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

  getActiveUser(): User{
    return this.activeUser;
  }

  setActiveUser(user: User): void{
    this.activeUser = user
  }

  createUser(user: User){
    this.users.push(user)
  }

  login(name: string){
    for(const i of this.users){
      if(i.name === name){
        this.setActiveUser(i)
      }
    }
    return 'User not found!'
  }

}
