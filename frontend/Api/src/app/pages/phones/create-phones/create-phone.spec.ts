import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatephoneComponent } from './create-phone.component';

describe('CreatephoneComponent', () => {
  let component: CreatephoneComponent;
  let fixture: ComponentFixture<CreatephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
