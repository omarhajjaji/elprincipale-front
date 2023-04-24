import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAttestComponent } from './demande-attest.component';

describe('DemandeAttestComponent', () => {
  let component: DemandeAttestComponent;
  let fixture: ComponentFixture<DemandeAttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAttestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeAttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
