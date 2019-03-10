import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(value: number, args?: any): number {
    return value * value * value; // yes, this is hardcode. Just for example
  }

}
