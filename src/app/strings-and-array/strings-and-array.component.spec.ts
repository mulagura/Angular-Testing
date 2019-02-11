import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsAndArrayComponent, greet, currencyArray } from './strings-and-array.component';

describe('StringsAndArrayComponent', () => {
  let component: StringsAndArrayComponent;
  let fixture: ComponentFixture<StringsAndArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringsAndArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringsAndArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should greet with name given', () => {

    expect(greet('ram')).toContain('ram');

  });

});

describe('currencyArray',()=>{

  it('should have currency for given INR',()=>{
      const result = currencyArray();
      expect(result).toContain('INR');
  });
  it('should have currency for given US',()=>{
      const result = currencyArray();
      expect(result).toContain('US');
  });

});
