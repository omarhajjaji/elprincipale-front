import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDashComponent } from './demande-dash.component';

describe('DemandeDashComponent', () => {
  let component: DemandeDashComponent;
  let fixture: ComponentFixture<DemandeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
