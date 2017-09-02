import { Pipe, PipeTransform } from '@angular/core';

// sources from https://stackoverflow.com/questions/35158817/angular-2-orderby-pipe

@Pipe({
  name: 'klorderby'
})
export class KlorderbyPipe implements PipeTransform {

  transform( array: Array<any>, orderField: string, dataType: string, orderType: boolean ): Array<string> {
    array.sort( ( a: any, b: any ) => {
      console.log(orderType);
        let ae = a[ orderField ];
        let be = b[ orderField ];
        console.log(ae);
        if ( ae == undefined && be == undefined ) return 0;
        if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
        if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
        if ( ae == be ) return 0;
        return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
        
    } );
    return array;
  }

 orderbynumber(a:any, b:any):number{
 
     if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
       //Isn't a number so lowercase the string to properly compare
       if(a.toLowerCase() < b.toLowerCase()) return -1;
       if(a.toLowerCase() > b.toLowerCase()) return 1;
     }
     else{
       //Parse strings as numbers to compare properly
       if(parseFloat(a) < parseFloat(b)) return -1;
       if(parseFloat(a) > parseFloat(b)) return 1;
      }
 
     return 0; //equal each other
 }


}
