import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-and-teardown-component',
  templateUrl: './setup-and-teardown-component.component.html',
  styleUrls: ['./setup-and-teardown-component.component.css']
})
export class SetupAndTeardownComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public votes:number=0;

  upvote(){
    this.votes++;

    //console.log(SetupAndTeardownComponentComponent);

    let comp =new SetupAndTeardownComponentComponent;
    //console.log(comp.upvote);
    
    
  }

  downvote(){
    this.votes--;
  }

}
