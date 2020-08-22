import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { has } from 'lodash';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  title = "Page Title";
  subtitle = "Lorem Ipsum eirunf riqwuindwi d wiqqwis"
  bg = "assets/images/slides/slide-1.jpg"
  hideHeader = false;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    route.data.subscribe(data=>{
      // console.log('route', data)
      if (has(data, 'title')) this.title = data.title;
      if (has(data, 'subtitle')) this.subtitle = data.subtitle;
      if (has(data, 'bg')) this.bg = data.bg;
      if (has(data, 'hideHeader')) this.hideHeader = data.hideHeader;

      this.bg = this.makeBgStyles(data.bg); 
    })
  }

  ngOnInit() {

    this.data.loadSubcategories()
  }

  makeBgStyles(img){
    let res = "background-image: url('" + (img ? img : this.bg) + "'); padding: 120px 0; position: inherit; background-size: cover; background-position: center;"
    return res;
  }

}
