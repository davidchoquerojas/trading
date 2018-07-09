import { Component } from '@angular/core';

/**
 * Generated class for the HeaderHelpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-help',
  templateUrl: 'header-help.html'
})
export class HeaderHelpComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderHelpComponent Component');
    this.text = 'Hello World';
  }

}
