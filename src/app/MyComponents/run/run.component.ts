import { Component, Input, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/MyServices/contact-service.service';
import { Product } from '../Product';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  @Input() product:Product[]=[]; 

  public contacts = [];
  constructor(private contactservice: ContactServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ngOnInit(){
  //   this.contactservice.getDateBackEnd().
  //   subscribe((resposnse) =>{this.contacts = resposnse});
  // }
}
