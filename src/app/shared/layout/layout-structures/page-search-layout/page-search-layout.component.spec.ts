import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchLayoutComponent } from './page-search-layout.component';

describe('PageSearchLayoutComponent', () => {
  let component: PageSearchLayoutComponent;
  let fixture: ComponentFixture<PageSearchLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSearchLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
