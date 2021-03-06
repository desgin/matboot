import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  locations: string[] = ['Downtown', 'S.county', 'lakeSide'];
  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initalizeForm();
  }

  initalizeForm(): void {
    this.volunteerForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      preferredLocation: ['', Validators.required],
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }), 
      references: this.fb.array([this.fb.control('')])
    });
  }

  onSubmit(): void {
    console.log(this.volunteerForm);
  }

  selectedLocation(event): void {
    this.volunteerForm.patchValue({
      preferredLocation: event.target.value
    });
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index): void {
    this.references.removeAt(index);
  }
  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }
}
