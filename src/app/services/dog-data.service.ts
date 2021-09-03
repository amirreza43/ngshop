import { Injectable } from '@angular/core';
import Dog from '../models/Dog';
import dogdata from '../dogdata.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogDataService {

  private allDogs: Dog[] = dogdata;
  private dummyDog: Dog = {
    id: '',
    name: '',
    thumbnail: '',
    image: ''
  }

  constructor() { }

  getAllDogs(): Observable<Dog[]>{
    return of(this.allDogs)
  }

  getById(id: string): Observable<Dog> {
    for( const d of this.allDogs ){
      if(d.id === id){
        return of(d)
      }
    }
    return of(this.dummyDog)
  }

  like(id: string): void{
    let dog;
    this.getById(id).subscribe(data => dog = data)
    if(!dog.like){
      dog.like = 0
    }
    dog.like += 1
  }

}
