import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.scss']
})
export class ViewChildChildComponent {

  public counter: number = 0;

  increase(){
    console.log("AAAAAAAAAAA");
    this.counter = this.counter + 1;
  }

  decrease(){
    this.counter = this.counter - 1;
  }

}
