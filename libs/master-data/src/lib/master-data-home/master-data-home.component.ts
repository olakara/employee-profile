import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryFormComponent } from '../components/country-form/country-form.component';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'ogc-master-data-home',
  templateUrl: './master-data-home.component.html',
  styleUrls: ['./master-data-home.component.css']
})
export class MasterDataHomeComponent implements OnInit {

  constructor(apiService: ApiServiceService,public modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public onAddCountryButton() {
    const modalRef = this.modalService.open(CountryFormComponent);
    modalRef.componentInstance.submitForm.subscribe( (data: any) => {
      console.log('Data from form', data);
    });
    
 }

}
