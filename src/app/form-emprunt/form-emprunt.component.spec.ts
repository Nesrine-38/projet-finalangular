import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpruntComponent } from './form-emprunt.component';

describe('FormEmpruntComponent', () => {
  let component: FormEmpruntComponent;
  let fixture: ComponentFixture<FormEmpruntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEmpruntComponent]
    });
    fixture = TestBed.createComponent(FormEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
