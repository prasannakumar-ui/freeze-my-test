import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(formData,searchText): unknown {
    if(searchText==undefined){
      return formData;
 }
 else{
   return formData.filter(x=>x.Name.toLowerCase().startsWith(searchText.toLowerCase()))
 }
  }

}
