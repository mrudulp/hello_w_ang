import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tweet = {
    body:"This is tweet",
    isLiked:false,
    likesCount:10
  }
  viewmode = 'map'
}
