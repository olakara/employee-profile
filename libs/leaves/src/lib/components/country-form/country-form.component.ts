import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ICountryFormModel } from '../../models/country-form.model';
import { ApiServiceService } from '../../services/api-service.service';


@Component({
  selector: 'ogc-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  @Output() submitForm: EventEmitter<ICountryFormModel> = new EventEmitter();

  countryForm: FormGroup;
  constructor(public modal: NgbActiveModal,public fb: FormBuilder, public api: ApiServiceService) { 

    this.countryForm = fb.group({
      id: [''],
      name: ['',[Validators.required]],
      code: ['',[Validators.required, Validators.maxLength(4)]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.api.addCountry(this.countryForm.value).subscribe( (response: any) => {
      this.submitForm.emit(this.countryForm.value);
      this.modal.close();
    },(err) => {
      alert(err); // display error...
    });    
  }

}
