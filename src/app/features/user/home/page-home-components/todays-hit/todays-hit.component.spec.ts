import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysHitComponent } from './todays-hit.component';

describe('TodaysHitComponent', () => {
  let component: TodaysHitComponent;
  let fixture: ComponentFixture<TodaysHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysHitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
