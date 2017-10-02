import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'klfiltervisitid'
})
export class KlfiltervisitidPipe implements PipeTransform {


  transform(listdata?: any, term?: any): any{
    console.log('coming filter through');
    console.log(term);
   // console.log(listdata);
      // check if search term is undefined then return null
    if (!term || !listdata )
      { return null; }
  
    // return matched array list
    return listdata.filter (function(matchedset){
      return matchedset.VisitID.toString() == term.toString();
    });
  }

}
