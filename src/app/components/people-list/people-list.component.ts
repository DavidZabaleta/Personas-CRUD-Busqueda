import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PerosnaServiceService } from '../../service/perosna-service.service';
import { Observable } from 'rxjs';
import { Navigation } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { TipoDocumentoIdentidad } from '../../model/tipo-documento-identidad';
import { TipoDocumentoIdentidadService } from '../../service/tipo-documento-identidad.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  personas: Persona[] = [];
  personaSeleccionada: Persona;
  tipoDocumentos: TipoDocumentoIdentidad[] = [];
  closeShow = false;
  filterDoc: string;
  filterStateId = false;
  filterStateNroDocumento = false;
  filterTag = '';
  searchValue;

  constructor(private personaService: PerosnaServiceService, private route: Router) { }


  ngOnInit() {
    this.listarPersonas();
  }

  listarPersonas() {
    this.personaService.listarPersonas().subscribe(
      personas => {
        this.personas = personas;
      }
    );
  }

  borrarPersona() {
    this.personaService.borrarPersona(this.personaSeleccionada.id).subscribe(
        () => {
          this.personas = this.personas.filter(persona => persona !== this.personaSeleccionada);
        }
    );
  }

  getPersonaEditar(persona: Persona) {
    localStorage.setItem('id', persona.id.toString());
    this.route.navigate(['/people-update']);
  }

  findById() {
    this.filterStateId = true;
    this.filterStateNroDocumento = false;
    this.setFilterTag();
  }

  findByNroDocumento() {
    this.filterStateNroDocumento = true;
    this.filterStateId = false;
    this.setFilterTag();
  }

  setFilterTag() {
    if (this.filterStateId) { this.filterTag = ' Id'; }
    if (this.filterStateNroDocumento) { this.filterTag = ' Número Documento'; }
  }

  buscar(value: any) {
    value = this.searchValue;

    if (this.filterStateId) {
      this.personaService.listarPersonaId(value).subscribe( persona =>
        this.personas = [persona]
      );
    } else if (this.filterStateNroDocumento) {
      this.personaService.listarPersonaNroDocumento(value).subscribe( persona =>
        this.personas = [persona]
      );
    }
    this.toggleCloseShow();
  }

  toggleCloseShow() {
    this.closeShow = !this.closeShow;
  }

  savePersonaModal(persona: Persona) {
    this.personaSeleccionada = persona;
  }
}
