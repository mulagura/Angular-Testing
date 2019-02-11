import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}

export function compute(number){

  if(number<0){
    return 0;
  }

  return number + 1;

}
