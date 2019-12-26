import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-grand-child",
  templateUrl: "./grand-child.component.html",
  styleUrls: ["./grand-child.component.css"],
  outputs: ["eventChild"]
})
export class GrandChildComponent implements OnInit {
  eventChild = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  keyupFun(childValue) {
    this.eventChild.emit(childValue);
  }
}
