import { Pipe, PipeTransform } from '@angular/core';
import { Months, Days } from 'src/app/components/_custom/functions'

@Pipe({
  name: 'displayDate'
})
export class DisplayDatePipe implements PipeTransform {
  
  transform(value: number): unknown {
    if (value==0) return null
    let date:any = new Date(value);
    let output = Days[date.getDay()]+' '+date.getDate().toString()+' '+Months[date.getMonth()]+' '+date.getFullYear().toString()
    .slice(-2);
    return output
  }

}
