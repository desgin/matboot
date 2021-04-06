import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privacy-statement',
  templateUrl: './privacy-statement.component.html',
  styleUrls: ['./privacy-statement.component.scss']
})
export class PrivacyStatementComponent implements OnInit {

  statementForm: FormGroup;
  errorMessage = false;
  
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { 
  }

 
  ngOnInit(): void {
    this.intializaStatementFrom();
  }

  intializaStatementFrom(): void {
    this.statementForm = this.fb.group({
      agreeBox: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if(this.statementForm.invalid) {
      this.errorMessage = true;
    } else {
      this.errorMessage = false;
      this.activeModal.close();
    }
  }
}
