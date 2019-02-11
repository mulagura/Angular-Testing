import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsComponent, compute } from './basics.component';

describe('BasicsComponent', () => {
  let component: BasicsComponent;
  let fixture: ComponentFixture<BasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should return zero if number is negative',()=>{
    const result = compute(-10);
    expect(result).toBe(0);
  });
  it('should return increment value if number is positive',()=>{
    const result = compute(10);
    expect(result).toBe(11);
  });

});
