import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  public Interpol="This is example of interpolation";
  public propertyBinding="This is property binding";
  public applyColor="applyColourRed";
  public isTrue=true;
  public applyMultipleStyle={
    "applyColourRed":this.isTrue,
    "applyStyle":this.isTrue
  }

  public colorRed="red";

  public applyingMultipleStyle={
    color:"blue"
  }

  public colors=["red","blue","green"];

  public chooseColor="blue";

  Submit(){
    console.log("Event Binding");
  }

  userInput="";

  ngOnInit(): void {
  }

}
