import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphoneComponent } from './list-phone.component';

describe('ListphoneComponent', () => {
  let component: ListphoneComponent;
  let fixture: ComponentFixture<ListphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
