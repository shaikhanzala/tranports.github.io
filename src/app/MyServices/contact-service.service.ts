import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Contact } from '../MyComponents/Contact';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private _url : string = 'http://localhost:3000/Contact';

  constructor(private http: HttpClient) {}
  getList(){
    return this.http.get(this._url);
  }
  saveList(data:any){
    // console.log("service",data)
    return this.http.post(this._url,data).subscribe((result)=>{
      console.log("data is here ", result)
    })
  }
}
