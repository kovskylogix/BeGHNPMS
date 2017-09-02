import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'klunique',
  pure: false
})
export class KluniquePipe implements PipeTransform {

       transform(array: Array<any>, args?: any): any {
        if(array!== undefined && args!== null){
             return _.uniqBy(array, args);
        }
        
        return null;
    }
}
