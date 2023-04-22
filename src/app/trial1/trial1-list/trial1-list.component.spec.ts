import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial1ListComponent } from './trial1-list.component';

describe('Trial1ListComponent', () => {
  let component: Trial1ListComponent;
  let fixture: ComponentFixture<Trial1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trial1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trial1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
