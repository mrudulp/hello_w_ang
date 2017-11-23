import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input("isActive") isActive: boolean;
  @Input("likesCount") likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  onClickToggle(){
    this.isActive? this.likesCount-- : this.likesCount++
    this.isActive = !this.isActive
  }

}
