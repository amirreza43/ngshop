import { TestBed } from '@angular/core/testing';
import User from '../models/User';

import { UserServiceService } from './user-service.service';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let user: User;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getActiveUser correctly gets the current user', () => {
    user = service.getActiveUser()
    expect(user).toEqual({
      name: 'Amir',
      favourites: [],
      like: []
      })
  });

  it('setActiveUser correctly sets the user who was passed', () => {
    service.setActiveUser({
      name: 'Kargen',
      favourites: [],
      like: []
      });

    user = service.getActiveUser()
    expect(user).toEqual({
      name: 'Kargen',
      favourites: [],
      like: []
      })
  });

  it('createUser correctly creates a new user', () => {
    user = {
      name: 'Chyld',
      favourites: [],
      like: []
    }

    service.createUser(user)

    service.setActiveUser(user);

    user = service.getActiveUser()
    expect(user).toEqual({
      name: 'Chyld',
      favourites: [],
      like: []
      })
  });

  it('login correctly logs in the user and sets them as active', () => {
    service.login('Kargen')
    user = service.getActiveUser()
    expect(user).toEqual({
      name: 'Kargen',
      favourites: [],
      like: []
      })
  });

});
