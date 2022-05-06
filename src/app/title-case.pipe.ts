import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {    

    transform(value: string, ...args: unknown[]) {
        let str = value.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }
}
