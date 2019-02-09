import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Conductor} from "../../interfaces/conductor";

@Component({
  selector: 'app-form-conductor',
  templateUrl: './form-conductor.component.html',
  styleUrls: ['./form-conductor.component.css']
})
export class FormConductorComponent implements OnInit {

  conductor = <Conductor>{};
  nombreButton: string = " ";

  @Input()
  conductorAux: Conductor;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.conductorAux != null)
      this.conductor = JSON.parse(JSON.stringify(this.conductorAux));
  }

  emitirFormulario(){
    this.formularioValido.emit(this.conductor);
  }

}
