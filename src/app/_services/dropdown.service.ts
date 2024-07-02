import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  state = [
    {id:1, name:'rajasthan', district: ['kota', 'jaipur', 'ajmer']},
    {id:2, name:'panjab', district: ['batinda', 'chandighar', 'aaa']},
    {id:2, name:'mp', district: ['indor', 'bhopal', 'shoypur']}
  ]

  constructor() { }

  getDistrict(value:any) {
    console.log(value);
    return this.state.find((item) => {
      return (item.name == value)
      
    })
  }
}
