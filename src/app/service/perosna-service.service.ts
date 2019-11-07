import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { Endpoints } from '../utils/endpoints';



@Injectable({
  providedIn: 'root'
})
export class PerosnaServiceService {

  header = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private client: HttpClient) { }

  listarPersonas(): Observable<Persona[]> {
    return this.client.get<Persona[]>(Endpoints.LISTAR.concat('s'));
  }

  listarPersonaId(id: number): Observable<Persona> {
    return this.client.get<Persona>(Endpoints.LISTAR.concat('/').concat(id.toString()));
  }

  listarPersonaNroDocumento(nroDocumento: string): Observable<Persona> {
    return this.client.get<Persona>(Endpoints.LISTAR.concat('/documento/').concat(nroDocumento));
  }

  borrarPersona(id: number): Observable<void> {
    return this.client.delete<void>(Endpoints.ELIMINAR.concat('/').concat(id.toString()));
  }

  registrarPersona(persona: Persona): Observable<Persona> {
    return this.client.post<Persona>(Endpoints.INSERTAR,
      persona,
      {headers: this.header}
      );
  }

  actualizarPersona(persona: Persona): Observable<Persona> {
    return this.client.put<Persona>(
      Endpoints.ELIMINAR + '/' + persona.id,
      persona
      );
  }


}
