import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrollytelling } from './scrollytelling';

describe('Scrollytelling', () => {
  let component: Scrollytelling;
  let fixture: ComponentFixture<Scrollytelling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scrollytelling],
    }).compileComponents();

    fixture = TestBed.createComponent(Scrollytelling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
