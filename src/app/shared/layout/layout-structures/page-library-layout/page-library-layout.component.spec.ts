import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLibraryLayoutComponent } from './page-library-layout.component';

describe('PageLibraryLayoutComponent', () => {
  let component: PageLibraryLayoutComponent;
  let fixture: ComponentFixture<PageLibraryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLibraryLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLibraryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
