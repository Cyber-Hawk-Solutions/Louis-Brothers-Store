import { Component, OnInit, Input } from '@angular/core';
import { isEmpty} from 'lodash'
import { DataService } from 'src/app/services/data/data.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() term: string;
  @Input() subcategories: any[];
  constructor(private data: DataService) { }

  ngOnInit(): void {

    if ( isEmpty(this.subcategories) ){
      this.data.getSubcategories().subscribe(categories=>{
        this.subcategories = categories;
      })
    }
  }

}
