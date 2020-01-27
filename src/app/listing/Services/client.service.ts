import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClientService {
  token = '';

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    this.token = token;
  }

  get(path) {
    return this.http.get(path);
  }

  post(path, body) {
    body.token = this.token;
    return this.http.post(path, body);
  }

  put(path, body) {
    body.token = this.token;
    return this.http.put(path, body);
  }

  delete(path) {
    return this.http.delete(path);
  }
}
