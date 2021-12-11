import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  concatenacao = ""

  passaParaCalculadora(evento){
    this.concatenacao += evento;
    console.log(this.concatenacao);
  }

  calculando(){
    this.concatenacao = eval(this.concatenacao);
  }
}
