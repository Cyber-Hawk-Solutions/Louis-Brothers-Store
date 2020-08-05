import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { replace, lowerCase, isEmpty} from "lodash";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any[];
  subcategories: any[];
  loading = true;
  contact: any = {};

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .query<any>({
        query: gql`
          {
            categories {
              id
              title
              image {
                url
              }
              hidden
            }
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
            contactInformation {
              phone
              title
              address
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          if (data.categories){
            this.categories = data.categories;
            this.categories.map(category=>{
              category.slug = this.makeSlug(category.title)
              return category;
            })
          }
          if (data.subcategories) {
            this.subcategories = data.subcategories;
            this.subcategories.map(category=>{
              category.slug =  this.makeSlug(category.title)
              if (!isEmpty(category.category)){
                category.category.slug = this.makeSlug(category.title)
              }
              return category;
            })
            
          } 
          if (data.contactInformation){
            this.contact = data.contactInformation;
          }

          this.loading = loading;
        }
      );
  }

  makeSlug(title){
    return replace(lowerCase(title), new RegExp(" ","g"), "-")
  }
}