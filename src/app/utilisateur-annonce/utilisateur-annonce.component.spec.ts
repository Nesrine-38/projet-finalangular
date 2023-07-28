import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurAnnonceComponent } from './utilisateur-annonce.component';

describe('UtilisateurAnnonceComponent', () => {
  let component: UtilisateurAnnonceComponent;
  let fixture: ComponentFixture<UtilisateurAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateurAnnonceComponent]
    });
    fixture = TestBed.createComponent(UtilisateurAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
