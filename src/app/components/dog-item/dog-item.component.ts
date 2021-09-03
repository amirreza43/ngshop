import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import Dog from 'src/app/models/Dog';
import User from 'src/app/models/User';
import { DogDataService } from 'src/app/services/dog-data.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css']
})
export class DogItemComponent implements OnInit {
  @Input() dog: Dog;
  user: User;
  isFav: Boolean = false;
  isLiked: Boolean = false;
  constructor(private dogService: DogDataService, private userServive: UserServiceService) { }

  ngOnInit(): void {
    this.userServive.getActiveUser().subscribe(data => {
      console.log(data);

    })
  }



  favourite(){
    this.userServive.getActiveUser().subscribe((data) => {
      this.user = data
    });

    if(this.user.favourites.length > 0){
      for(const i of this.user.favourites){
        if(i.id === this.dog.id){
          return
        }
      }
    }
    this.user.favourites.push(this.dog)
    this.isFav = true;
    console.log(this.user);


  }

  like(){
    this.userServive.getActiveUser().subscribe(data => this.user = data);
    if(this.user.like.length > 0){
      for(const i of this.user.like){
        if(i.id === this.dog.id){
          return
        }
      }
    }
    this.user.like.push(this.dog)
    this.isLiked = true;

    this.dogService.like(this.dog.id)

  }

}
