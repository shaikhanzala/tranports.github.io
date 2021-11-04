import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/app/MyServices/product.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pickup: string ='';
  distination: string ='';
  company: string ='';
  type: string ='';
  price: string ='';
  quantity: string ='';
  email: string ='';
  phone: string ='';

  alert:boolean = false;


  constructor(private router:ActivatedRoute,private service :ProductService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.service.getList(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log("Details: ",result)
      this.pickup = result['pickup'];
      this.distination = result['distination'];
      this.company = result['company'];
      this.type = result['type'];
      this.price = result['price'];
      this.quantity = result['quantity'];
      this.email = result['email'];
      this.phone = result['phone'];
    })
  }
  onUpdate(){
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
    console.log("Product:",product)
    this.service.updateList(this.router.snapshot.params.id,product).subscribe((result)=>
      console.log("Update :",result)
    )
    this.alert = true
  }
}
