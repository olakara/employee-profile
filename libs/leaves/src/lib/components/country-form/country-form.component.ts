import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ogc-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  countryForm: FormGroup;
  constructor(public modal: NgbActiveModal,public fb: FormBuilder) { 

    this.countryForm = fb.group({
      name: new FormControl('',[Validators.required]),
      code: new FormControl('',[Validators.required, Validators.maxLength(4)])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitForm.emit(this.countryForm.value);
  }

}
