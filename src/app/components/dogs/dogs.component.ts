import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../../services/dog-data.service'
import Dog from '../../models/Dog'
import User from '../../models/User'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  allDogs: Dog[] = [];


  constructor(private dogService: DogDataService) { }

  ngOnInit(): void {

    this.dogService.getAllDogs().subscribe((data)=>{
      this.allDogs = data;
    })

    console.log(this.allDogs);


  }

}
