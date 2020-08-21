import { Component, OnInit, Input } from '@angular/core';
declare var $, jQuery: any;

@Component({
  selector: 'subcategories-filter',
  templateUrl: './subcategories-filter.component.html',
  styleUrls: ['./subcategories-filter.component.scss']
})
export class SubcategoriesFilterComponent implements OnInit {

  @Input() subcategories: any[];
  @Input() categories: any[];

  constructor() { }

  ngOnInit() {
    (function ($) {
      console.log('load filters1')

      $(document).ready(function () {

        console.log('load filters2')
          // external js: isotope.pkgd.js

          // store filter for each group
          var buttonFilters = { category: null};
          var buttonFilter;
          // quick search regex
          var qsRegex;

          // init Isotope
          var $grid = $('.shop2').isotope({
            itemSelector: '.product',
            transitionDuration: '0.65s',
            getSortData: {
              name: 'h3 a', // text from querySelector
              price: function( itemElem ) { // function
                var price = $( itemElem ).find('.product-price p span').text();
                return parseFloat( price.replace( /[\(\)]/g, '') );
              }
            },
            filter: function () {
              var $this = $(this);
              var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
              var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
              return searchResult && buttonResult;
            },
          });

          $('.filters').on('click', 'li', function (e) {
            var $this = $(this);
            e.preventDefault()

            buttonFilters.category = $this.attr('data-filter');
            // combine filters
            buttonFilter = concatValues(buttonFilters);
            // Isotope arrange
            $('#shop2').isotope({ filter: buttonFilter});

          });

          $('.shop-sorting').on( 'click', 'li', function(e) {
            var sortByValue = $(this).attr('data-sort-by');
            e.preventDefault()
            
            $grid.isotope({ sortBy: sortByValue });
          });

          // // use value of search field to filter
          var $quicksearch = $('.quicksearch').keyup(debounce(function () {
            qsRegex = new RegExp($quicksearch.val(), 'gi');
            $grid.isotope();
          }));

          // change is-checked class on buttons
          $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function () {
              $buttonGroup.find('.activeFilter').removeClass('activeFilter');
              $grid.addClass('activeFilter');
            });
          });

          // flatten object by concatting values
          function concatValues(obj) {
            var value = '';
            for (var prop in obj) {
              value += obj[prop];
            }
            return value;
          }

          // debounce so filtering doesn't happen every millisecond
          function debounce(fn, threshold=null) {
            var timeout;
            threshold = threshold || 100;
            return function debounced() {
              clearTimeout(timeout);
              var args = arguments;
              var _this = this;
              function delayed() {
                fn.apply(_this, args);
              }
              timeout = setTimeout(delayed, threshold);
            };
          }

      


      });
    })(jQuery); /* END OF WRAPPING FUNCTION */
  }
}