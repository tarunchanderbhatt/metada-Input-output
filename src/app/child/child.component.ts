import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
  encapsulation: ViewEncapsulation.None,
  inputs: ["pdata"]
})
export class ChildComponent implements OnInit {
  pdata: any;
  childVar = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
