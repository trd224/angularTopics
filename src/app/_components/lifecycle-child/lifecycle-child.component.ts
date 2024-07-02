import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() value: any

  constructor(){
    console.log("Constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called", changes['value']);
  }


  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    
  }

}
