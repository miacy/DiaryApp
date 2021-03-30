import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Case } from './case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  demo_cases: Case[] = [
    { id: 1, name: 'Personal Website' },
    { id: 2, name: 'Online Shop' },
    { id: 3, name: 'VR App'}
  ];

  constructor(private http: HttpClient) { }

  getCases(): Observable<Case[]> {
    return of(this.demo_cases);
  }
}
