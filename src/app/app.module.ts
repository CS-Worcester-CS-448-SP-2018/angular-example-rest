import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TextbookListComponent } from './textbook-list/textbook-list.component';
import { TextbookDetailComponent } from './textbook-detail/textbook-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TextbookListComponent,
    TextbookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
