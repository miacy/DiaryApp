import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Case } from '../case';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  cases: Case;
  demo_cases: Case[];
  selectedCase: Case;

  constructor(private caseService: CaseService) { }

  ngOnInit(): void {
    this.caseService.getCases().subscribe(cases => this.demo_cases = cases);
  }

  onSelect(cases: Case): void {
    this.selectedCase = cases;
  }



}
