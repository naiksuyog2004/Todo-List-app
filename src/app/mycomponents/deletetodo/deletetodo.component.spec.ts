import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetodoComponent } from './deletetodo.component';

describe('DeletetodoComponent', () => {
  let component: DeletetodoComponent;
  let fixture: ComponentFixture<DeletetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
