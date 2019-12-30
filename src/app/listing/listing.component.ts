import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  genres: any = [];
  genreName = '';
  editGenreName = '';
  selectedGenre = null

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  // Async -> await
  async getAllGenres() {
    try {
      const promise = await this.httpClient.get('http://localhost:3200/api/genres').toPromise();
      this.genres = promise;

    } catch (error) {
      console.log('Error');
    }
  }

  selectGenre(item) {
    this.selectedGenre = item;
  }

  addNewGenre() {
    const request = {
      name: this.genreName
    };

    this.httpClient.post('http://localhost:3200/api/genres', request).toPromise().then(
      () => { this.getAllGenres() },
      (err) => { console.log(err) }
    );
  }

  editGenreNameAction() {
    if (!this.selectedGenre) { return }

    const request = {
      name: this.editGenreName
    };

    this.httpClient.put(`http://localhost:3200/api/genres/${this.selectedGenre.id}`, request).toPromise().then(
      (data: any) => {
        this.getAllGenres();
        this.selectedGenre.name = data.name;
      },
      (err) => { console.log(err) }
    );
  }

  deleteGenre() {
    if (!this.selectedGenre) { return }

    this.httpClient.delete(`http://localhost:3200/api/genres/${this.selectedGenre.id}`).toPromise().then(
      () => {
        this.getAllGenres();
        this.selectedGenre = null;
      },
      (err) => { console.log(err) }
    );
  }

}
