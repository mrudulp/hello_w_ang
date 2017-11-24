import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title:string
  // @Input('zippy') body:string
  isCollapsed:boolean = true
  
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isCollapsed = !this.isCollapsed
  }

}
