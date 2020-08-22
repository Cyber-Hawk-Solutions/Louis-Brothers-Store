import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { isEmpty, replace, lowerCase, chunk, round } from 'lodash';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {

  itemsHalf = [];
  itemsHalf2 = []
  subcategory:any = {};
  
  constructor(private activatedRoute: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
    .query<any>({
      query: gql`
        {
          subcategories ( 
            where: {
              title: "${this.activatedRoute.snapshot.params.id}"
            }
          ){
            id
            title
            startingPrice
            image {
              url
            }
          }
          items (
            where: {
              status_ne: "outOfStock" 
              type: {
                title: "${this.activatedRoute.snapshot.params.id}"
              }
            } 
          ) {
            id
            name
            image {
              url
            }
            hidden

          }
        }
      `
    })
    .subscribe(
      ({ data, loading }) => {

        if (data.items) {
          this.itemsHalf = data.items;
          this.itemsHalf.map(item=>{
            item.slug =  this.makeSlug(item.title)
            if (!isEmpty(item.category)){
              item.type.slug = this.makeSlug(item.type.title)
            }
            return item;
          })
          
        } 

        let items = chunk(this.itemsHalf, round(this.itemsHalf.length/2));
        
        this.itemsHalf = items[0]
        this.itemsHalf2 = items[1]

        if (data.subcategories) {
          this.subcategory = data.subcategories[0]
          
        } 




      }
    );
    
  }

  makeSlug(title){
    return replace(lowerCase(title), new RegExp(" ","g"), "-")
  }

}
