import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpruntComponent } from './list-emprunt.component';

describe('ListEmpruntComponent', () => {
  let component: ListEmpruntComponent;
  let fixture: ComponentFixture<ListEmpruntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmpruntComponent]
    });
    fixture = TestBed.createComponent(ListEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
