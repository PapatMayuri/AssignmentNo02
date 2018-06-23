import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvCOmpComponent } from './marv-comp.component';

describe('MarvCOmpComponent', () => {
  let component: MarvCOmpComponent;
  let fixture: ComponentFixture<MarvCOmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvCOmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvCOmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
