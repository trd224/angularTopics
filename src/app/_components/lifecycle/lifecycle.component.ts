import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent {

  value: string = "rizwan";

  change(inputRef:any){
    this.value = inputRef.value;
  }

}
