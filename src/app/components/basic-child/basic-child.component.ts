import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-child',
  templateUrl: './basic-child.component.html',
  styleUrls: ['./basic-child.component.css']
})
export class BasicChildComponent implements OnInit {

  @Input() pageTitle: string;
  @Output() pageTitleChange = new EventEmitter<string>();
  onTitleChange(model: string) {
    this.pageTitle = model;
    this.pageTitleChange.emit(model);
  }

  constructor() { }

  ngOnInit() {
  }

}
