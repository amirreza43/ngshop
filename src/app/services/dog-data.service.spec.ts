import { TestBed } from '@angular/core/testing';
import dataJson from '../dogdata.json'
import { DogDataService } from './dog-data.service';
import Dog from '../models/Dog'
import { Observable , of } from 'rxjs'

describe('DogDataService', () => {
  let service: DogDataService;
  let dogData: Dog;
  let dogDataArr: Dog[]
  let dataJsonArr: Dog[] = dataJson

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogDataService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getById should return data by id', () => {
    const dataId = '4ziNJuYbfDius'; // from datadata.json
    service.getById(dataId).subscribe(data => dogData = data)
    expect(dogData).toEqual(dataJson[0])
  });

  it('getAllDogs shuld return all dogs', () => {

    service.getAllDogs().subscribe(data => dogDataArr = data)
    expect(dogDataArr).toEqual(dataJsonArr)
  });

  it('like shuold add one like to the dog given its id', () => {
    const dataId = '4ziNJuYbfDius'; // from datadata.json
    service.like(dataId)
    service.getById(dataId).subscribe(data => dogData = data)
    expect(parseInt(`${dogData.like}`)).toEqual(1)
  });

});
