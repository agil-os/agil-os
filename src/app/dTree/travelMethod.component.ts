import { Component } from '@angular/core';

@Component({
  // moduleId: module.id,
  // selector used for when you are rendering a cpomponent and/or passing down properties to that component
  selector: 'travel-method',
  templateUrl: '../dTree/travelMethod.component.html',
  // directives: []
  // providers: [] where you specify the components you get stuff from *i think*
})
export class TravelComponent {
  // also define dynamic values in the hmtl files like title= 'Pllnr'
  constructor(/*get*/) {

  }
  // functions after constructor
  ngOnInit() {

  }

}