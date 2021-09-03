import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import Dog from 'src/app/models/Dog';
import User from 'src/app/models/User';
import { DogItemComponent } from './dog-item.component';

describe('DogItemComponent', () => {
  let component: DogItemComponent;
  let fixture: ComponentFixture<DogItemComponent>;
  let dog: Dog = {"id": "4ziNJuYbfDius", "name": "relaxed bull dog GIF", "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif", "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif"}
  let user: User =    {
    name: 'Amir',
    favourites: [],
    like: [dog]
    }
  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
      declarations: [ DogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogItemComponent);
    component = fixture.componentInstance;
    component.dog = dog
    component.user = user
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('favourite should add the dog to users\' favourites array', () => {

    component.favourite()
    expect(component.user.favourites[0]).toEqual(dog)

  });

  it('favourite function checks for duplicity and wont allow for it', () => {

    component.favourite()
    component.favourite()
    expect(component.user.favourites[0]).toEqual(dog)
    expect(component.user.favourites[1]).toBeFalsy()

  });

  it('like adds one to the like array inside the user object', () => {

    component.like()
    fixture.detectChanges();
    console.log(component.dog.like);

    expect(component.user.like).toEqual(user.like)

  });

});
