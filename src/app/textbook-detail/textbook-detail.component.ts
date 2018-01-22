/**
 * TextbookDetailComponent takes a Textbook object and displays it as a table row.
 *
 * @author Karl R. Wurst
 * @version 11 November 2017
 * Copyright 2017
 * Licensed under GPL v3
 */
import { Component, Input } from '@angular/core';
import { Textbook} from "../textbook";

@Component({
  selector: 'app-textbook-detail',
  templateUrl: './textbook-detail.component.html',
  styleUrls: ['./textbook-detail.component.css']
})

/**
 * Receives from the enclosing HTML a Textbook object to display.
 */
export class TextbookDetailComponent {
  @Input() textbook: Textbook;
}
