import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../model/persona';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(personas: Persona[], arg: string): Persona[] {

    if (!personas || !arg) {
      return personas;
    }

    return personas.filter(persona =>
      persona.nroDocumento.indexOf(arg) !== -1
    );
  }
}
