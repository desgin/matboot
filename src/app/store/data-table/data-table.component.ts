import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/interface/periodicElement';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name','weight', 'identification'];
  dataSource: PeriodicElement[] = [];

  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.displayPeriodicData();
  }

  displayPeriodicData(): void {
   this.storeService.getPerodicTable()
          .subscribe(data => this.dataSource = data);
  }

}
