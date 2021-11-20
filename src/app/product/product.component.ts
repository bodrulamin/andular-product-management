import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  addProduct(form: NgForm) {
    const header = { 'content-Type': 'application/json' }
    this.http.post('http://localhost:8080/add_product', JSON.stringify(this.product), { headers: header, })
      .subscribe(data => {
        console.log(data);
      })


  }


}
