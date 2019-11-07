import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PerosnaServiceService } from '../../service/perosna-service.service';
import { TipoDocumentoIdentidad } from '../../model/tipo-documento-identidad';
import { TipoDocumentoIdentidadService } from '../../service/tipo-documento-identidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-register',
  templateUrl: './people-register.component.html',
  styleUrls: ['./people-register.component.sass']
})
export class PeopleRegisterComponent implements OnInit {

  persona: Persona = new Persona();
  tipoDocumentos: TipoDocumentoIdentidad[] = [];

  constructor(private personaService: PerosnaServiceService,
              private tipoDocumentoService: TipoDocumentoIdentidadService,
              private router: Router) { }

  ngOnInit() {
    this.tipoDocumentoService.listarDocumentoIdenidad().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );
  }

  insertPersona() {
    this.personaService.registrarPersona(this.persona).subscribe(
      (data) => {
        this.persona = data;
        this.router.navigate(['/people-list']);
      }
    );
  }

}
