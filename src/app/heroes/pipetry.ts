import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform{
    transform(heroname:string) {
        return 'The'  + " " + heroname;
    }
}