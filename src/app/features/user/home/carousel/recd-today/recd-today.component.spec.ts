import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecdTodayComponent } from './recd-today.component';

describe('RecdTodayComponent', () => {
  let component: RecdTodayComponent;
  let fixture: ComponentFixture<RecdTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecdTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecdTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
