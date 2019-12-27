import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  errorMessage = '';
  searcKeyword = '';
  movies = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { }

  makeSearch() {
    let params = new HttpParams();
    params = params.append('page', '1');
    params = params.append('r', 'json');
    params = params.append('s', this.searcKeyword);

    let headers = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', 'movie-database-imdb-alternative.p.rapidapi.com');
    headers = headers.append('x-rapidapi-key', '5f762cbb66mshcfebf6533c33f45p105831jsn18c98477fe1f');

    const url = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
    const options = { headers: headers, params: params };

    this.httpClient.get(url, options).toPromise().then(
      (data: any) => { this.movies = data.Search; }
    ).catch(
      (error) => {
        console.log('Error: ', error);
        this.errorMessage = error.error.message;
      }
    )

    // *** Es aris observable
    // this.httpClient.get(url, options).subscribe(
    //   (data: any) => {
    //     console.log('Data: ', data);
    //     this.movies = data.Search;
    //   },
    //   (error) => {
    //     console.log('Error: ', error);
    //     this.errorMessage = error.error.message;
    //   }
    // );
  }

}
