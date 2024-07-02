import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';


@Component({
  selector: 'app-dynamic-component-container',
  templateUrl: './dynamic-component-container.component.html',
  styleUrls: ['./dynamic-component-container.component.scss']
})
export class DynamicComponentContainerComponent implements OnInit {


  @ViewChild('dContainer', {read: ViewContainerRef}) dContainer : ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ){

  }

  ngOnInit(): void {
    
  }

  createDynamicComp(data: any){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponentComponent);
    const componentRef = this.dContainer.createComponent(componentFactory);

    // Set input properties or call methods on the dynamic component instance


    //componentRef.instance.someInput = 'Rizwan';
    componentRef.instance.someInput = data;
    componentRef.instance.someMethod('aaa');
    componentRef.instance.dataEvent.subscribe(data => {
      console.log(data);
    })
  }

  // abc(){

  // }


}


