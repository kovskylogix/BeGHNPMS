import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'klsymptomfilter'
})
export class KlsymptomfilterPipe implements PipeTransform {

  transform(listdata: any, term?: string): any {
    // check if search term is undefined then return null
   if (term === undefined) return null;
   // return matched array list
   return listdata.filter(function(matchedset){
     return matchedset.Category == term ;
   })
  }
}
