import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../model/persona';
import { PerosnaServiceService } from '../../service/perosna-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoDocumentoIdentidadService } from '../../service/tipo-documento-identidad.service';
import { TipoDocumentoIdentidad } from 'src/app/model/tipo-documento-identidad';
import { PeopleListComponent } from 'src/app/components/people-list/people-list.component';

@Component({
  selector: 'app-people-update',
  templateUrl: './people-update.component.html',
  styleUrls: ['./people-update.component.sass']
})
export class PeopleUpdateComponent implements OnInit {

  persona: Persona;

  constructor(private personaService: PerosnaServiceService, private route: Router) {
  }

  ngOnInit() {
    this.getPersona();
  }

  getPersona() {
    const id = Number.parseInt(localStorage.getItem('id'));
    this.personaService.listarPersonaId(id).subscribe(data => {
      this.persona = data;
    });
  }

  updatePersona() {
    console.log(this.persona);
    this.personaService.actualizarPersona(this.persona).subscribe(
      (data) => {
        this.persona = data;
        this.route.navigate(['/people-list']);
      }
    );
  }

}
