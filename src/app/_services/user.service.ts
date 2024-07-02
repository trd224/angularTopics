import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList = [
    {id: 1, name: 'User1', status: false},
    {id: 2, name: 'User2', status: false},
    {id: 3, name: 'User3', status: true},
    {id: 4, name: 'User4', status: false},
    {id: 5, name: 'User5', status: true},
  ]

  constructor() { }

  changeStatus(user:any){     
    this.userList.find((item) => {
      if(item.id == user.id){
        item.status = !user.status
      }
    })


  }

  
}
