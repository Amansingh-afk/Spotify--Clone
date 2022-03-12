import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeLayoutComponent } from './page-home-layout.component';

describe('PageHomeLayoutComponent', () => {
  let component: PageHomeLayoutComponent;
  let fixture: ComponentFixture<PageHomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
