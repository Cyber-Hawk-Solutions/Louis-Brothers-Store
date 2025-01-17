import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSliderComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let component: CategoriesSliderComponent;
  let fixture: ComponentFixture<CategoriesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
