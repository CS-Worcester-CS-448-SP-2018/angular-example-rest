/**
 * TextbookListComponent takes an array of Textbook objects and displays a list of TextbookDetailComponents.
 *
 * @author Karl R. Wurst
 * @version 11 November 2017
 * Copyright 2017
 * Licensed under GPL v3
 */
import { Component, Input } from '@angular/core';
import { Textbook } from '../textbook';

@Component({
  selector: 'app-textbook-list',
  templateUrl: './textbook-list.component.html',
  styleUrls: ['./textbook-list.component.css']
})

/**
 * Receives from the enclosing HTML
 *    a string called complete that represents whether the textbook order is complete.
 *    an array of Textbook objects to display.
 */
export class TextbookListComponent {
  @Input() complete: string;
  @Input() textbooks: Array<Textbook>;
}
