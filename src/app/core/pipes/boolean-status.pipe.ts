import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanStatus',

})
export class BooleanStatusPipe implements PipeTransform {

    transform(value: boolean): string {
        return value ? 'habilitado' : 'deshabilitado';
    }

}