import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { CountryFormComponent } from '../components/country-form/country-form.component';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'ogc-leaves-details',
  templateUrl: './leaves-details.component.html',
  styleUrls: ['./leaves-details.component.css']
})
export class LeavesDetailsComponent implements OnInit {

  disabled = false;

   constructor(apiService: ApiServiceService,public modalService: NgbModal) {
     
    }

   ngOnInit(): void {
     
   }

   public toggleAccordian(props: NgbPanelChangeEvent) {
     console.log(props)
   }

   public onAddCountryButton() {
      const modalRef = this.modalService.open(CountryFormComponent);
      modalRef.componentInstance.submitForm.subscribe( (data: any) => {
        console.log('Data from form', data);
      });
      
   }

}
