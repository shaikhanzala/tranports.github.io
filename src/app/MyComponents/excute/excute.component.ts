import { Component, OnInit,Input } from '@angular/core';
import { Contact } from '../Contact';
import { Product } from '../Product';

@Component({
  selector: 'app-excute',
  templateUrl: './excute.component.html',
  styleUrls: ['./excute.component.css']
})
export class ExcuteComponent implements OnInit {
  @Input() product: Product[] = [];
  @Input() contact: Contact[] = [];
  // product: Product[] = [];
  alert:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  addProduct(product: Product){
    console.log('added to storage!')
    console.log(product);
    this.product.push(product);
  }
  contactAdd(contact:Contact){
    console.log(contact);
    this.contact.push(contact);
  }
}
