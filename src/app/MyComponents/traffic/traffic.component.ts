import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit {
  image1 : String = "/assets/images/1.gif";
  image2 : String = "/assets/images/2.gif"; 
  image3 : String = "/assets/images/3.jpg"; 
  image4 : String = "/assets/images/4.jpg"; 
  image5 : String = "/assets/images/5.gif"; 
  image6 : String = "/assets/images/6.jpg"; 
  image7 : String = "/assets/images/7.jpg"; 
  image8 : String = "/assets/images/8.png"; 
  image9 : String = "/assets/images/9.png"; 
  image10 : String = "/assets/images/10.png"; 

  

  constructor() { }

  ngOnInit(): void {
  }

}
