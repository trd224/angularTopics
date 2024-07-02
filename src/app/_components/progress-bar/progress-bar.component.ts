import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


  width:any;
  subscription: Subscription | undefined
  
  constructor(
   
  ){
   
  }

  ngOnInit(): void {

   this.subscription = interval(100).subscribe(res => {
      this.width = res;
      if(this.width == 100){
        this.subscription?.unsubscribe();
      }
    })
  // let i = 0; 
  // let a = setInterval(() => {
  //   this.width = i;
  //   i++;
  //       if(this.width == 100){
  //       clearInterval(a);
  //     }
  // },100)

    
  }

}
