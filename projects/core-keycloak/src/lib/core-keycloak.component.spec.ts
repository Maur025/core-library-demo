import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreKeycloakComponent } from './core-keycloak.component';

describe('CoreKeycloakComponent', () => {
  let component: CoreKeycloakComponent;
  let fixture: ComponentFixture<CoreKeycloakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreKeycloakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreKeycloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
