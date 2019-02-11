import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strings-and-array',
  templateUrl: './strings-and-array.component.html',
  styleUrls: ['./strings-and-array.component.css']
})
export class StringsAndArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export function greet(message){

  return 'Welcome Mr.' + message;

}

export function currencyArray(){
  return ['INR','US'];
}
