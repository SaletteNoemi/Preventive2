import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial1CreateComponent } from './trial1-create.component';

describe('Trial1CreateComponent', () => {
  let component: Trial1CreateComponent;
  let fixture: ComponentFixture<Trial1CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trial1CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trial1CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
