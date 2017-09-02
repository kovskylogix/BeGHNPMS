import { Pipe, PipeTransform } from '@angular/core';

// source of code sample from https://www.youtube.com/watch?v=sVTNaYBVP88

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {

  transform(listdata: any, term: any): any {
    // check if search term is undefined then return null
   if (term === undefined) return null;

   // return matched array list
   return listdata.filter(function(matchedset){
     return matchedset.firstname.toLowerCase().includes(term.toLowerCase()) || 
            matchedset.lastname.toLowerCase().includes(term.toLowerCase()) ||
            matchedset.middlename.toLowerCase().includes(term.toLowerCase());
   })
  }

}
