import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlbumLayoutComponent } from './page-album-layout.component';

describe('PageAlbumLayoutComponent', () => {
  let component: PageAlbumLayoutComponent;
  let fixture: ComponentFixture<PageAlbumLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAlbumLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlbumLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
