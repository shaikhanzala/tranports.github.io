import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagehome : String = "/assets/images/value1.jpg";

  imageCard1 : String = "/assets/cardImages/1.jpeg";
  imageCard2 : String = "/assets/cardImages/2.jpeg"; 
  imageCard3 : String = "/assets/cardImages/3.jpeg"; 
  imageCard4 : String = "/assets/cardImages/4.jpeg"; 
  imageCard5 : String = "/assets/cardImages/5.jpeg"; 
  imageCard6 : String = "/assets/cardImages/6.jpeg"; 
  product: Product[] = [];
  // imageCard7 : String = "/assets/cardImages/7.jpeg"; 
  // imageCard8 : String = "/assets/cardImages/8.jpeg"; 
  // imageCard9 : String = "/assets/cardImages/9.jpeg"; 


  constructor() { }

  ngOnInit(): void {
  }

}
