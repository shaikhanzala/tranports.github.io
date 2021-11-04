import { Component, NgModule, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Product } from '../Product';
import { ProductService } from 'src/app/MyServices/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() Productsadd: EventEmitter<Product> = new EventEmitter();
  @Input() product: Product[] = [];
  
  pickup: string ='';
  distination: string ='';
  company: string ='';
  type: string ='';
  price: string ='';
  quantity: string ='';
  email: string ='';
  phone: string ='';

  greeting: string = '';

  alert:boolean = false;

  myform!: FormGroup;
  
  constructor(private service:ProductService) {

  }
  collection ={};
  ngOnInit(): void {
  }

  onSubmit(){
    const product = {
      pickup:this.pickup,
      distination:this.distination,
      company:this.company,
      type:this.type,
      price:this.price,
      quantity:this.quantity,
      email:this.email,
      phone:this.phone
    }
    console.log(product);
    this.service.saveList(product) ;
    this.alert = true;
    this.myform.reset();
  }
}
