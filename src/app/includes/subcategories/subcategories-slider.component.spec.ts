import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesSliderComponent } from './subcategories-slider.component';

describe('SubcategoriesComponent', () => {
  let component: SubcategoriesSliderComponent;
  let fixture: ComponentFixture<SubcategoriesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
