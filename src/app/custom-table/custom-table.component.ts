import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {

  @Input() dataTable: Array<any> = [];

  constructor() { }

  public createHeader(): Array<any> {
    return Object.keys(this.dataTable[0]);
  }
  public createBody(): Array<any> {
    return this.dataTable.map(person => Object.values(person));
  }

  public orderBy(itemOrder: any): void {
    this.dataTable.sort((a,b) => (a[itemOrder] > b[itemOrder]) ? 1 : ((b[itemOrder] > a[itemOrder]) ? -1 : 0));
  }

}
