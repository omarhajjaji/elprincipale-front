import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDemandeComponent } from './archive-demande.component';

describe('ArchiveDemandeComponent', () => {
  let component: ArchiveDemandeComponent;
  let fixture: ComponentFixture<ArchiveDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
