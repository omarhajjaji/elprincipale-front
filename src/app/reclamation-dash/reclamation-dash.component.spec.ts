import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationDashComponent } from './reclamation-dash.component';

describe('ReclamationDashComponent', () => {
  let component: ReclamationDashComponent;
  let fixture: ComponentFixture<ReclamationDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
