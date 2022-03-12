import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpBackInComponent } from './jump-back-in.component';

describe('JumpBackInComponent', () => {
  let component: JumpBackInComponent;
  let fixture: ComponentFixture<JumpBackInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpBackInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpBackInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
