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
  productApi: string = this.apiUrl + 'product';
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
        //  console.log(res);


        this.products.next(res.data.products)
      }
    )
  }


  addProduct(product: Product) :Observable<any> {
    const header = { 'content-Type': 'application/json' }
   return this.http.post(this.productApi, JSON.stringify(product), { headers: header, })
     
  }

  update(product: Product) {
    const header = { 'content-Type': 'application/json' }
   return this.http.put<ApiResponse>(this.productApi, JSON.stringify(product), { headers: header, })
    
  }


  delete(product: Product) {
   return this.http.delete(this.productApi + "?id=" + product.id)
   
  }
}
