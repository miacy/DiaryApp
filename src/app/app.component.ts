import { Component } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BizLink';

  ROOT_URL = "http://localhost:3000/products";
  product: any;
  constructor(private http: HttpClient) {}

  getProduct() {
    this.product = this.http.get(this.ROOT_URL);
  }
}
