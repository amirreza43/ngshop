import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import User from 'src/app/models/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  changeUser(id: number){

    if(id === 0){
      this.userService.setActiveUser('Amir')
    } else if(id === 1){
      this.userService.setActiveUser('Kargen')
    } else if(id === 2){
      this.userService.setActiveUser('Kay')
    } else {
      console.log('error');

    }

  }

}
