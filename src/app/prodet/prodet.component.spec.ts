import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdetComponent } from './prodet.component';

describe('ProdetComponent', () => {
  let component: ProdetComponent;
  let fixture: ComponentFixture<ProdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
