import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingChecklist } from './packing-checklist';

describe('PackingChecklist', () => {
  let component: PackingChecklist;
  let fixture: ComponentFixture<PackingChecklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackingChecklist],
    }).compileComponents();

    fixture = TestBed.createComponent(PackingChecklist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
