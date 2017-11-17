import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CapStartPipe } from './capstart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavoriteComponent,
    CapStartPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
