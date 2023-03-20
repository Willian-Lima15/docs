import { Component, ContentChild, Input, OnChanges, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
  @ContentChild("coluna") colunas!: QueryList<TemplateRef<any>>;
  @ContentChild("header") header!: QueryList<TemplateRef<any>>;
  @Input() dados!: Array<any>;

  constructor() {}

  
}
