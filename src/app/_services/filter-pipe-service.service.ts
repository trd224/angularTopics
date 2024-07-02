import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterPipeServiceService {

  list = [
    {id: 1, name:'nameOne1'},
    {id: 2, name:'nameTwo2'},
    {id: 3, name:'nameThree3'},
    {id: 4, name:'nameFour4'},
    {id: 5, name:'nameFive5'},
    {id: 6, name:'nameSix6'},
    {id: 7, name:'nameSeven7'},
    {id: 8, name:'nameEight8'},
    {id: 9, name:'nameNine9'},
    {id: 10, name:'nameTen10'},
  ]

  constructor() { }
}
