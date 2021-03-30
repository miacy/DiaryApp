import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { Tender } from '../tenders/tender.model';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  tender_list: Tender[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.tender_list = this.api.getTenders();
  }

  onUploadTender(tenderForm: NgForm) {
    const tender: Tender = {
      title: tenderForm.value.title,
      content: tenderForm.value.content
    }
    this.api.postTender('tenders', tender);
  }

}
