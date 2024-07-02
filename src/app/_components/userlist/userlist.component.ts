import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userList: any;
  constructor(
    private userService: UserService
  ){

  }

  ngOnInit(): void {
      this.userList = this.userService.userList;
      console.log(this.userList);
  }


  changeStatus(user:any){
      this.userService.changeStatus(user);
  }

}
