import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';



@Injectable({
  providedIn: 'root'
})
export class PerosnaServiceService {
  
  endPoint = 'http://localhost:8080/personas/personas';

  constructor(private client: HttpClient) { }

  listarEmpleados(): Observable<Persona[]>{
    return this.client.get<Persona[]>(this.endPoint);
  }

}
