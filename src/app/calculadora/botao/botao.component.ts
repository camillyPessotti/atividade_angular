import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() num;

  @Output() passaParaFuncao = new EventEmitter<any>();

  passaParaCalculadora(){
    this.passaParaFuncao.emit(this.num);
  }
}
