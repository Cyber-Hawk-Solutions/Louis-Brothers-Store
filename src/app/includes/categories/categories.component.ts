import { Component, OnInit, Input } from '@angular/core';
declare var $;
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

  loadData(){
    setTimeout(()=>{
  

    },500)
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          },
          1300: {
            items: 4
          }
        }
      })  
    })
  }


  makeStyles(img) {
    let res = "background-image: url('" + img + "'); position:relative; background-repeat: no-repeat; background-position: center center; background-size: cover;"
    return res;
  }

}
