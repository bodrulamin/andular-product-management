import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ApiResponse } from '../appmodelclass/apirespons';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  adding: boolean = true;
  editMode : boolean = false;
  products: Product[] = []


  constructor(private service: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.productList.subscribe(plist => this.products = plist)
  }

  addProduct() {
    console.log('add method called');

    this.service.addProduct(this.product).subscribe(data => {
      this.service.updateList();
      this.toastr.success("Product Added!")
      this.product = new Product();
    });



  }

  delete(product: Product) {
    console.log(product);
    this.service.delete(product).subscribe(data => {
      this.service.updateList();
      this.toastr.error("Product Deleted")
    });
    this.products = this.products.filter(item => item.id != product.id)
  }


  updateProduct() {
    console.log('update method called');
    this.adding = true;
    this.service.update(this.product).subscribe(data => {
      this.toastr.info("Product Updated")
      this.product = new Product()
      console.log(data);
      this.service.updateList()
      
    })

      ;



  }
  editButton(product: Product) {
    this.product.id = product.id;
    this.product.name = product.name;
    this.product.price = product.price;
    this.product.quantity = product.quantity;
    this.product.remarks = product.remarks;
    
    this.adding = false;
  }
  cancelUpdate() {
    this.product = new Product();
    this.adding = true;
  }



}
