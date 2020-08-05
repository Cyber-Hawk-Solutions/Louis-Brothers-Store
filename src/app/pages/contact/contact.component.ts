import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { replace, lowerCase, isEmpty} from "lodash";
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .query<any>({
        query: gql`
          {
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

          if (data.contactInformation){
            this.contact = data.contactInformation;
          }
        }
      );
  }

}
