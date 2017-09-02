import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilterbypatientid'
})
export class CustomfilterbypatientidPipe implements PipeTransform {

  transform(listdata: any, term: any): any{
    console.log(listdata);
    console.log(term);
   
      // check if search term is undefined then return null
   if (term === undefined) return null;

   // return matched array list
   return listdata.filter(function(matchedset){
     return matchedset.PatientID == term.toString() || 
            matchedset.patientid == term.toString()
   })
  }

}
