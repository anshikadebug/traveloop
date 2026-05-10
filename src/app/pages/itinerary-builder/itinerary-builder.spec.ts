import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryBuilder } from './itinerary-builder';

describe('ItineraryBuilder', () => {
  let component: ItineraryBuilder;
  let fixture: ComponentFixture<ItineraryBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(ItineraryBuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
