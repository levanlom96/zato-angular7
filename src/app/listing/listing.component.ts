import { Component, OnInit } from '@angular/core';
import { ClientService } from './Services/client.service';

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

  loggedInUser = null;

  username = '';
  password = '';

  username1 = '';
  password1 = '';

  message = '';

  constructor(
    private client: ClientService,
  ) { }

  ngOnInit() { }

  login() {
    // Send request
    console.log('username: ', this.username, 'password: ', this.password);

    const request = {
      username: this.username,
      password: this.password
    };

    this.client.post('http://localhost:3200/api/login', request).toPromise().then(
      (response: any) => {
        console.log('Response from server: ', response);
        this.client.setToken(response.token);
      },
      (err) => { console.log(err) }
    );
  }

  register() {
    const request = {
      username: this.username1,
      password: this.password1
    };

    this.client.post('http://localhost:3200/api/register', request).toPromise().then(
      (response) => {
        console.log('Response from server: ', response);
      },
      (err) => { console.log(err) }
    );
  }

  // Async -> await
  async getAllGenres() {
    try {
      const promise = await this.client.get('http://localhost:3200/api/genres').toPromise();
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

    this.client.post('http://localhost:3200/api/genres', request).toPromise().then(
      () => { this.getAllGenres() },
      (err) => { console.log(err) }
    );
  }

  editGenreNameAction() {
    if (!this.selectedGenre) { return }

    const request = {
      name: this.editGenreName
    };

    this.client.put(`http://localhost:3200/api/genres/${this.selectedGenre.id}`, request).toPromise().then(
      (data: any) => {
        this.getAllGenres();
        this.selectedGenre.name = data.name;
      },
      (err) => { console.log(err) }
    );
  }

  deleteGenre() {
    if (!this.selectedGenre) { return }

    this.client.delete(`http://localhost:3200/api/genres/${this.selectedGenre.id}`).toPromise().then(
      () => {
        this.getAllGenres();
        this.selectedGenre = null;
      },
      (err) => { console.log(err) }
    );
  }

}
