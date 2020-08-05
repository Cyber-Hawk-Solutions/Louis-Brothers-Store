import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-cards',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesSliderComponent implements OnInit {

  @Input() categories: any[];

  constructor() { }

  ngOnInit() {
  }

  makeStyles(img){
    let res = "background-image: url('" + img+ "'); background-repeat: no-repeat; background-position: center center; background-size: cover;"
    return res;
  }

}
