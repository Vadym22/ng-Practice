import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  pageTitle = 'Some title';

  /*Pipes*/
  number = 123;
  currentDate = new Date();
  toggle = true;
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }

  /*Directives*/
  // tslint:disable-next-line:member-ordering
  toggleBold = false;
  toggleClass() {
    this.toggleBold = !this.toggleBold;
  }
  // tslint:disable-next-line:member-ordering
  hello = true;
  toggleHello() {
    this.hello = !this.hello;
  }
  // tslint:disable-next-line:member-ordering
  items = ['html', 'css', 'js'];

  constructor() { }

  ngOnInit() {
    this.pageTitle = 'Basic';
  }

}
