import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/interface/periodicElement';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, identification: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, identification: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, identification: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, identification: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, identification: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, identification: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, identification: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, identification: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, identification: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, identification: 'Ne'},
];
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name','weight', 'identification'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    
  }

}
