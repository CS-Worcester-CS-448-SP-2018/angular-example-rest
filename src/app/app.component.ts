import { Component } from '@angular/core';
import { Textbook } from "./textbook";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textbooks: Array<Textbook> = [];

  constructor(private http : HttpClient) {
    this.http.get<Array<Textbook>>('http://localhost:3000/textbooks').subscribe(
      textbookdata => this.textbooks = textbookdata
    );
  }
}

