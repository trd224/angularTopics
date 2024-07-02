import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(nameList: any, filterString: any): any {

    console.log(nameList)
    //console.log(filterString.toLowerCase());
    if(!filterString){
      return nameList
    }
    else{
       return nameList.filter((item:any) => {
        //console.log(item);
        //console.log(item.name.includes(filterString));
        if(item.name.toLowerCase().includes(filterString.toLowerCase())){
          return item.name
        }
      })
    }

  }

}
