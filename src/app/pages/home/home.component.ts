import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { replace, lowerCase, isEmpty} from "lodash";
import { DataService } from 'src/app/services/data/data.service';
declare var $;
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

  constructor(private apollo: Apollo, private data: DataService) { }

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
                category.category.slug = this.makeSlug(category.category.title)
              }
              return category;
            })

            this.data.setSubcategories(this.subcategories);
            
          } 
          if (data.contactInformation){
            this.contact = data.contactInformation;
          }

          this.loading = loading;

          // setTimeout(()=>{
            // $('.owl-carousel').owlCarousel({
            //   loop: true,
            //   margin: 10,
            //   nav: false,
            //   dots: false,
            //   responsive: {
            //     0: {
            //       items: 1
            //     },
            //     600: {
            //       items: 3
            //     },
            //     1000: {
            //       items: 4
            //     }
            //   }
            // })  
          // }, 200)

        }
      );
  }

  makeSlug(title){
    return replace(lowerCase(title), new RegExp(" ","g"), "-")
  }
}