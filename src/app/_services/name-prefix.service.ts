import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamePrefixService {

  names = [
    {name: 'rizwan', gender: 'male'},
    {name: 'ritu', gender: 'female'},
    {name: 'lalu', gender: 'male'},
    {name: 'gudiya', gender: 'female'},
  ]

  constructor() { }
}
