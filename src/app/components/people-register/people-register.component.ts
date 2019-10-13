import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PerosnaServiceService } from '../../service/perosna-service.service';

@Component({
  selector: 'app-people-register',
  templateUrl: './people-register.component.html',
  styleUrls: ['./people-register.component.sass']
})
export class PeopleRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {    
  }

}
