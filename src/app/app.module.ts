import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { TenderListComponent } from './tenders/tender-list/tender-list.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { TenderCreateComponent } from './tenders/tender-create/tender-create.component';
import { RequirementListComponent } from './requirements/requirement-list/requirement-list.component';
import { RequirementCreateComponent } from './requirements/requirement-create/requirement-create.component';
import { VenderComponent } from './vender/vender.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CaseDetailComponent,
    TenderListComponent,
    HomeComponent,
    CustomerComponent,
    TenderCreateComponent,
    RequirementListComponent,
    RequirementCreateComponent,
    VenderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
