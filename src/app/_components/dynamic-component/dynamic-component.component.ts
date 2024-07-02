import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent {

  @Output() dataEvent = new EventEmitter;

  someInput: any
  name: string = 'lalu';

  someMethod(p: any){
    console.log(p);
    console.log('method called');
  }

  buttonClick(){
    this.dataEvent.emit(this.name);
  }

}
