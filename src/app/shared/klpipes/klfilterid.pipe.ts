import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'klfilterid'
})
export class KlfilteridPipe implements PipeTransform {

  transform(listdata: Array<any>, args: string, filtercol: string): Array<any> {
        if (typeof args[0] === "undefined") {
            return listdata;
        }

        let direction = args[0][0];
        let idvalue = args[0].replace('!','');
        let filtercolumn = filtercol;
        console.log('listdata');
        console.log(listdata);
        console.log('direction');
        console.log(direction);
        console.log('idvalue');
        console.log(idvalue);
        console.log('filtercolumn');
        console.log(filtercolumn);


        console.log(listdata.filter(function(listdata){
                        listdata[filtercolumn] == idvalue;
                    })
                )
      

        /*
        return listdata.filter(function(listdata){
               listdata[1] == idvalue;
        })
        */ 
         
    }

}
