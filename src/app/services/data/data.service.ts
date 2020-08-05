import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  prodApiUrl = 'https://louisbrothersstore.ue.r.appspot.com';
  devApiUrl = 'http://localhost:1337';
  prod = true;

  constructor(private http: HttpClient) {
  }

  getApi(){
    return this.prod?this.prodApiUrl:this.devApiUrl;
  }


  makeRequest(url, data=null): Promise<any>{
    return new Promise (resolve=>{
      this.http.get(`${this.getApi()}/${url}`).subscribe(data=>{
        resolve(data)
      });

    })
  }

}
