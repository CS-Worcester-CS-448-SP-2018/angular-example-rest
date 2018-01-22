/**
 * Textbook class represents the information about a "textbook" for a course.
 * A textbook could be an actual textbook, a web resource, or simply a note about materials.
 * All fields are optional. If unused, set to undefined.
 *
 * @author Karl R. Wurst
 * @version 11 November 2017
 * Copyright 2017
 * Licensed under GPL v3
 */
 export class Textbook {
  title: string;
  authors: string;
  publisher: string;
  year: number;
  isbn: string;
  url: string;
  note: string;
  coverUrl: string;

  /**
   * Textbook class represents the information about a "textbook" for a course.
   * A textbook could be an actual textbook, a web resource, or simply a note about materials.
   * All fields are optional. If unused, set to undefined.
   * @param title Title of the textbook
   * @param author Author of the textbook
   * @param publisher Publisher of the textbook
   * @param year Year of publication
   * @param isbn ISBN-13
   * @param url URL to website
   * @param note Note
   * @param coverUrl URL to cover (or other) image
   */
  constructor(title, author, publisher, year, isbn, url, note, coverUrl) {
    this.title = title;
    this.authors = author;
    this.publisher = publisher;
    this.year = year;
    this.isbn = isbn;
    this.url = url;
    this.note = note;
    this.coverUrl = coverUrl;
  }

}
