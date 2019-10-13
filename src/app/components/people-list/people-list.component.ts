import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PerosnaServiceService } from '../../service/perosna-service.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.sass']
})
export class PeopleListComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private personaService: PerosnaServiceService) { }

  ngOnInit() {
    this.personaService.listarEmpleados().subscribe(
      personas =>{
        this.personas = personas;
      }
    );
  }

}
