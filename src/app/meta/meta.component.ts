import { Component, OnInit } from "@angular/core";

class classOne {
  constructor() {
    console.log("This is Class One Constructor");
  }
  name = "Class 1 Varialbe Tarun Chander Bhatt";
}

class classTwo {
  age: 25;
  constructor() {}
  getFunction(fullname) {
    console.log("Class 2 me function outside constructor" + fullname);
  }
}

@Component({
  selector: "app-meta",
  templateUrl: "./meta.component.html",
  styleUrls: ["./meta.component.css"],
  preserveWhitespaces: false,
  viewProviders: [classOne, classTwo]
})
export class MetaComponent implements OnInit {
  familName: string;
  phone: number = 9999513370;
  n1: number = 20;
  n2: number = 50;
  componey = [
    { name: "componey 1", age: 25, ori: "text2" },
    { name: "componey 2", age: 25, ori: "text2" },
    { name: "componey 3", age: 25, ori: "text2" },
    { name: "componey 4", age: 25, ori: "text2" },
    { name: "componey 5", age: 25, ori: "text2" }
  ];

  errorHendle;
  constructor(public obj: classOne, public obj2: classTwo) {
    console.log(obj.name + "\n");
    obj2.getFunction("this is tarun ");
  }
  getFamilyName() {
    this.familName = "Tarun Chander Bhatt, Urmila Bhatt, Parikshit Bhatt";
  }

  get myfun() {
    return 20 + 20;
  }

  ngOnInit() {}
}
