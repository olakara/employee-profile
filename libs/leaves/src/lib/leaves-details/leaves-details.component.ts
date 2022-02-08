import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ogc-leaves-details',
  templateUrl: './leaves-details.component.html',
  styleUrls: ['./leaves-details.component.css']
})
export class LeavesDetailsComponent implements OnInit {

  disabled = false;

   constructor() {
     
    }

   ngOnInit(): void {
     
   }

   public toggleAccordian(props: NgbPanelChangeEvent) {
     console.log(props)
   }

   

}
