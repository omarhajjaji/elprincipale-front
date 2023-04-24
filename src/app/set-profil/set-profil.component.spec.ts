import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilComponent } from './set-profil.component';

describe('SetProfilComponent', () => {
  let component: SetProfilComponent;
  let fixture: ComponentFixture<SetProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
