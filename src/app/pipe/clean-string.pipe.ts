import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanString'
})
export class CleanStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\-/g, ' ');
  }

}
