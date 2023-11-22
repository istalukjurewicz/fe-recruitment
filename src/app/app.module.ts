import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostAuthorComponent } from './post-author.component';
import { PostContentComponent } from './post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAuthorComponent,
    PostContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
