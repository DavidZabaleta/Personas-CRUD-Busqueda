import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDocumentoIdentidad } from '../model/tipo-documento-identidad';
import { Endpoints } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoIdentidadService{
  
  constructor(private http: HttpClient) { }

  listarDocumentoIdenidad(): Observable<TipoDocumentoIdentidad[]>{
    return this.http.get<TipoDocumentoIdentidad[]>(Endpoints.LISTAR_DOCUMENTOS);
  }

}
