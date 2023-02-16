import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  myData: any = [];
  checked: boolean;
  constructor() {
    this.checked = false;
    this.myData = [
      { sid: 1, name: 'Nidhish', location: 'Bangalore' },
      { sid: 2, name: 'Nishanth', location: 'Mangalore' },
    ];
  }
  status() {
    this.checked = !this.checked;
  }
}
