import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHitComponent } from './today-hit.component';

describe('TodayHitComponent', () => {
  let component: TodayHitComponent;
  let fixture: ComponentFixture<TodayHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayHitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
