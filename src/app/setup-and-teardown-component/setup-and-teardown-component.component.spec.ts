import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAndTeardownComponentComponent } from './setup-and-teardown-component.component';
import { unusedValueExportToPlacateAjd } from '../../../node_modules/@angular/core/src/render3/interfaces/node';

describe('SetupAndTeardownComponentComponent', () => {
  let component: SetupAndTeardownComponentComponent;
  let fixture: ComponentFixture<SetupAndTeardownComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupAndTeardownComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAndTeardownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

                    // state change spec.ts

//   it('should increment vote for upvote method', () => {

//                   //arrange
//     const comp = new SetupAndTeardownComponentComponent;

//                    //act
//     comp.upvote();

//                    //assert
//     expect(comp.votes).toBe(1);
    
//   });

//   it('should decrement vote for downvote method', () => {

//     //arrange
//     const comp = new SetupAndTeardownComponentComponent;

//     //act
//     comp.downvote();

//     //assert
//     expect(comp.votes).toBe(-1);
    
//   });

let comp;

beforeEach(()=>{

  comp = new SetupAndTeardownComponentComponent;

});

it('should increment vote for upvote',()=>{

  comp.upvote();

  expect(comp.votes).toBe(1);

  //console.log(comp);

});

it('should decrement vote for downvote',()=>{

  comp.downvote();

  expect(comp.votes).toBe(-1);

});


 });
