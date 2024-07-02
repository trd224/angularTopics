import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, QueryList, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-content-child-child',
  templateUrl: './content-child-child.component.html',
  styleUrls: ['./content-child-child.component.scss']
})
export class ContentChildChildComponent implements AfterContentInit {

  // @ContentChild('porjectionHeading') porjectionHeading: ElementRef;

  @ContentChildren('porjectionHeading') porjectionHeading: QueryList<any>

  constructor(
    private renderer: Renderer2
  ){

  }

  
  ngAfterContentInit(): void {
    // console.log(this.porjectionHeading);
    // // this.porjectionHeading.nativeElement.style.color = 'blue'
    // //this.porjectionHeading.nativeElement.renderer.setStyle("")
    // this.renderer.setStyle(this.porjectionHeading.nativeElement, "color", 'pink')

    console.log(this.porjectionHeading['_results'][2].nativeElement)
    console.log(this.porjectionHeading.last.nativeElement)
  }

}
