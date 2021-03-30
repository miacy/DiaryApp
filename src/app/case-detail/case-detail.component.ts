import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Case } from '../case';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {
  @Input() case: Case;

  constructor() { }

  ngOnInit(): void {
  }

}
