import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const valDate:any=new Date(value);
    const currentDate:any=new Date();
    
    let seconds:any=new Date(currentDate-valDate);
    seconds=seconds/1000;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const pastSec=Math.floor(seconds)%60;
    if(days===0){
      return 'posted '+hours +'hours '+minutes+'minutes '+pastSec+'seconds ago';
    }else{
    return 'posted '+days +'day:'+hours +'hours '+minutes+'minutes '+pastSec+'seconds ago';
  }
  }

}
