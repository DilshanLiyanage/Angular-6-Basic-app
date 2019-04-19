import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [AuthorService]
})
export class AuthorComponent implements OnInit {

  title = "List of Authors";
  authors;

  // dependency injection
  constructor(authorSerice: AuthorService) {
    this.authors = authorSerice.getAuthors();
  }

  ngOnInit() {
  }

}
