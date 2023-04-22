import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial1DetailsComponent } from './trial1-details.component';

describe('Trial1DetailsComponent', () => {
  let component: Trial1DetailsComponent;
  let fixture: ComponentFixture<Trial1DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trial1DetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trial1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
