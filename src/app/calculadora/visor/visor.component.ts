import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() recebendoValor = "";
}
