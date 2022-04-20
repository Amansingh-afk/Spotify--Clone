import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAlbumComponent } from './popular-album.component';

describe('PopularAlbumComponent', () => {
  let component: PopularAlbumComponent;
  let fixture: ComponentFixture<PopularAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
