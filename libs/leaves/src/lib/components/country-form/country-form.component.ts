import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ogc-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  submit() {
    this.submitForm.emit({});
  }

}
