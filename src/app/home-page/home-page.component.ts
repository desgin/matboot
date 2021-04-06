import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrivacyStatementComponent } from './privacy-statement/privacy-statement.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.modalService.open(PrivacyStatementComponent);
  }
}
