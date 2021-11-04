import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ContactServiceService } from 'src/app/MyServices/contact-service.service';
import { Contact } from '../Contact';
// import { EventEmitter } from 'stream';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  @Output() addscontact: EventEmitter<Contact> = new EventEmitter();
  name : string = "";
  email : string = "";
  phone : string = "";
  desc : string = "";


  
  constructor(private service:ContactServiceService) { }

  alert:boolean = false;
  
  ngOnInit(){
  } 
  
  addContact(){
    console.log("submiting the form");
    const contact = {
      name:this.name,
      email:this.email,
      phone:this.phone,
      desc:this.desc
    }

    // console.log(contact);
    // this.addscontact.emit(contact);
    this.service.saveList(contact) ;
    this.alert = true;
    
    
    
  }
  contactAdd(contact:Contact){
    console.log(contact);
    this.contacts.push(contact);
    this.alert = true;
  }

}


