import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  course: string;
  fontColorTheme: string;
  alignments: string;
  uname: string;
  buttonColor: string;
  presentAddress: string;
  permanentAddress: string;
  myStatus: string;
  myData: any;
  constructor() {
    this.course = 'Angular';
    this.alignments = 'center';
    this.fontColorTheme = 'blue';
    this.uname = '';
    this.buttonColor = 'red';
    this.presentAddress = '';
    this.permanentAddress = '';
    this.myStatus = 'NO';
  }
  sendMsg() {
    alert('Welcome to the learning');
  }
  valuechange(event: any) {
    if (this.presentAddress === this.permanentAddress) {
      this.buttonColor = 'green';
      this.myStatus = 'YES';
    } else {
      this.buttonColor = 'red';
      this.myStatus = 'NO';
    }
  }
}
