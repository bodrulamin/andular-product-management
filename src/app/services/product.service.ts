import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiResponse } from '../appmodelclass/apirespons';

import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'http://localhost:8080/';
  addApi: string = this.apiUrl + 'add_product';
  plistApi: string = this.apiUrl + 'plist';

  products = new BehaviorSubject<Product[]>([]);
  productList = this.products.asObservable();
  apires = new ApiResponse();

  constructor(private http: HttpClient) {
    this.updateList();
  }
  updateList() {
    this.http.get<ApiResponse>(this.plistApi).subscribe(
      res => {
        console.log(res.data.products);
        this.products.next(res.data.products)
      }
    )
  }


  addProduct(product: Product) {
    const header = { 'content-Type': 'application/json' }
    this.http.post(this.addApi, JSON.stringify(product), { headers: header, })
      .subscribe(data => {
        this.updateList();
      })
  }


  delete(product: Product) {
    this.http.delete(this.apiUrl + product.id).subscribe(product => console.log(product))
  }
}
