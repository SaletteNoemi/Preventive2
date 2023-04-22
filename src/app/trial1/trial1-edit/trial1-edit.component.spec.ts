import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial1EditComponent } from './trial1-edit.component';

describe('Trial1EditComponent', () => {
  let component: Trial1EditComponent;
  let fixture: ComponentFixture<Trial1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trial1EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trial1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
