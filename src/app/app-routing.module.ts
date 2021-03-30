import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { TenderListComponent } from './tenders/tender-list/tender-list.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { VenderComponent } from './vender/vender.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'customer', component: CustomerComponent },
  // { path: 'vender', component: VenderComponent },
  // { path: 'cases', component: CasesComponent },
  // { path: 'tender_list', component: TenderListComponent },
  // { path: '**', redirectTo: '' }
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'vender', component: VenderComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
