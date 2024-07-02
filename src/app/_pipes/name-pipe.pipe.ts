import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {

  transform(value: any, args: any): any {

    console.log(args);
    if(args == 'male'){
      return 'Mr '+ value;
    }
    else{
      return 'Mrs '+ value;
    }
  }

}
