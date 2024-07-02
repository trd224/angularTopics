import { Component } from '@angular/core';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-dynamic-component-container2',
  templateUrl: './dynamic-component-container2.component.html',
  styleUrls: ['./dynamic-component-container2.component.scss']
})
export class DynamicComponentContainer2Component {

  componentRef = DynamicComponentComponent
  

  // loadComponent(){
  //  this.componentRef = DynamicComponentComponent;
  // }
}
