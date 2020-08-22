import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { replace, lowerCase, isEmpty} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  prodApiUrl = 'https://louisbrothersstore.ue.r.appspot.com';
  devApiUrl = 'http://localhost:1337';
  prod = true;
  searchCategories: EventEmitter<any> =   new EventEmitter();

  constructor(private http: HttpClient, private apollo: Apollo) {
  }

  getApi(){
    return this.prod?this.prodApiUrl:this.devApiUrl;
  }

  getSubcategories(){
    return this.searchCategories;
  }

  setSubcategories(categories){
    this.searchCategories.emit(categories);
  }

  loadSubcategories(){
    this.apollo
      .query<any>({
        query: gql`
          {
            subcategories {
              id
              title
              startingPrice
              image {
                url
              }
              hidden
              category {
                title
              }
              hidden
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {

          if (data.subcategories) {
            data.subcategories.map(category=>{
              category.slug =  this.makeSlug(category.title)
              if (!isEmpty(category.category)){
                category.category.slug = this.makeSlug(category.category.title)
              }
              return category;
            })

            this.setSubcategories(data.subcategories);
          }
      
        })
  }

  makeRequest(url, data=null): Promise<any>{
    return new Promise (resolve=>{
      this.http.get(`${this.getApi()}/${url}`).subscribe(data=>{
        resolve(data)
      });

    })
  }

  makeSlug(title){
    return replace(lowerCase(title), new RegExp(" ","g"), "-")
  }

}
