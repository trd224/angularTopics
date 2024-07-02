import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewChildChildComponent } from '../view-child-child/view-child-child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements AfterViewInit {

  // @ViewChild('el') el: ElementRef;
  @ViewChildren('el') el: QueryList<any>
  @ViewChild('childView') childView : ViewChildChildComponent

  ngAfterViewInit(): void {
    //console.log(this.el['_results'][3].nativeElement);
    //this.el.nativeElement.style.backgroundColor = 'red'
    this.el.last.nativeElement.style.backgroundColor = 'green';
    this.el['_results'][2].nativeElement.style.backgroundColor = 'yellow';
  }

  inc(){
    this.childView.increase();
  }

  dec(){
    this.childView.decrease()
  }

}
