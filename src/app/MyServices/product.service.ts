import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url : string = 'http://localhost:3000/Product';
  constructor(private http: HttpClient) { }

  getListProduct(){
    console.log(this.http.get(this._url));
    return this.http.get(this._url);
  }
  saveList(data:any){
    return this.http.post(this._url,data).subscribe((result)=>{
      console.log("data is here ", result);
    })
  }
  getList(id:any){
    return this.http.get(`${this._url}/${id}`);
  }
  updateList(id:any,data:any){
    return this.http.put(`${this._url}/${id}`,data);
  }
}
