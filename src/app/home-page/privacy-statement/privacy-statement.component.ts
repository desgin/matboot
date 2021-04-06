import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privacy-statement',
  templateUrl: './privacy-statement.component.html',
  styleUrls: ['./privacy-statement.component.scss']
})
export class PrivacyStatementComponent implements OnInit {
  
  constructor(public activeModal: NgbActiveModal) { 
  }

 
  ngOnInit(): void {
  }
}
