import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isActive = false;
  // longtext = "the Blah blh blash blashhhh the of the world"
  longtext = ""

  constructor() { }

  ngOnInit() {
  }

  toggleMe() {
    console.log(' Toggle clicked');
    this.isActive = !this.isActive
  }

  keyboardPressed(word:string){
    // console.log("keyboard pressed::"+word)
    this.longtext = word
  }
}
