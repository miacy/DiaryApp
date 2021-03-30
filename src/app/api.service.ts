import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tender } from './tenders/tender.model';
import { Requirement } from './requirements/requirement.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ROOT_URL;

  tender: any;
  requirements: any;
  // private requirements: Requirement[] = [];
  // private requirementUpdated = new Subject<Requirement[]>();

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000/';
  }

  getTenders() {
    // this.tender = this.http.get(`${this.ROOT_URL}/tenders`);
    this.tender = this.http.get<Tender[]>(`${this.ROOT_URL}tenders`).toPromise().then(res => this.tender = res.toString);
      
      console.log(this.tender);
    return this.tender;
  }

  postTender(uri: String, payload: Tender) {
    this.http.post(`${this.ROOT_URL}/${uri}`, payload)
      .toPromise()
      .then(data => {
        console.log(data);
      });
  }

  getRequirements() {
    this.requirements = this.http.get(`${this.ROOT_URL}/requirements`);
    // return [...this.requirements];
  }

  // getRequirementsUpdateListener() {
  //   return this.requirementUpdated.asObservable();
  // }

  postRequirement(uri: String, payload: Requirement) {
    this.http.post(`${this.ROOT_URL}/${uri}`, payload)
      .toPromise()
      .then(data => {
        console.log(data);
      });
  }


}
