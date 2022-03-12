import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiPartyComponent } from './hindi-party.component';

describe('HindiPartyComponent', () => {
  let component: HindiPartyComponent;
  let fixture: ComponentFixture<HindiPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindiPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
