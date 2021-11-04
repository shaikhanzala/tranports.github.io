import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from 'src/app/MyServices/product.service';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @Input() products:Product[]= [];
  public products:Product[] = [];
  url = "http://localhost:3000/Product";



  constructor(private http: HttpClient) {
   }
   collection:any = [];

   ngOnInit(): void {
     this.http.get<any>('http://localhost:3000/Product').subscribe(
       data =>{
         this.collection = data;
       }
     )
   }
   Update(id:any){

   }
   deleteContact(id:any){
     this.collection.splice(id,1)
     this.http.delete(`${this.url}/${id}`).subscribe(
       data => {console.log("Deleted:",data)}
     )
   }

}
