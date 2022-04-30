import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTopTrackComponent } from './album-top-track.component';

describe('AlbumTopTrackComponent', () => {
  let component: AlbumTopTrackComponent;
  let fixture: ComponentFixture<AlbumTopTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumTopTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumTopTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
