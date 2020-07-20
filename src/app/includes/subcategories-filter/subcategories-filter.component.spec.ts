import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesFilterComponent } from './subcategories-filter.component';

describe('SubcategoriesFilterComponent', () => {
  let component: SubcategoriesFilterComponent;
  let fixture: ComponentFixture<SubcategoriesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoriesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
