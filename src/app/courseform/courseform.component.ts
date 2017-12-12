import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  categoryList = [
    {"id": 1, "name": "alpha"},
    {"id": 2, "name": "beta"},
    {"id": 3, "name": "gamma"},
  ]
  constructor() { }

  ngOnInit() {
  }

  submit(f){
    console.log("Submit::" + f)
  }
  log(courseName){
    console.log("CourseName::" + courseName)
  }

}
