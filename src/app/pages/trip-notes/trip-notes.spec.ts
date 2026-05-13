import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripNotes } from './trip-notes';

describe('TripNotes', () => {
  let component: TripNotes;
  let fixture: ComponentFixture<TripNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(TripNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
