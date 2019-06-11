import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIntKfeComponent } from './sign-int-kfe.component';

describe('SignIntKfeComponent', () => {
  let component: SignIntKfeComponent;
  let fixture: ComponentFixture<SignIntKfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignIntKfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignIntKfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
