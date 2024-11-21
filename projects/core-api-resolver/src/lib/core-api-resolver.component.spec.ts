import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreApiResolverComponent } from './core-api-resolver.component';

describe('CoreApiResolverComponent', () => {
  let component: CoreApiResolverComponent;
  let fixture: ComponentFixture<CoreApiResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreApiResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreApiResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
