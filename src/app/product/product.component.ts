import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ApiResponse } from '../appmodelclass/apirespons';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  adding: boolean = true;
  products: Product[] = []


  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.productList.subscribe(plist => this.products = plist)
  }

  addProduct(){
    console.log('add method called');

    this.service.addProduct(this.product);
    this.product = new Product();
  }

  delete(product: Product) {
    console.log(product);
    this.service.delete(product);
    this.products = this.products.filter(item => item.id != product.id)
  }


  updateProduct(product: Product) {
    console.log('update method called');
    this.adding = true;
    this.product = new Product();
    this.products[product.id] = product;


  }
  editButton(product: Product) {

    this.product = product;
    this.adding = false;
  }


}
