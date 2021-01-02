import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http: HttpClient) { }

  searchStato(query: string) {
    const url = `https://restcountries.eu/rest/v2/alpha/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'https://restcountries.eu'
    });

    let obsStato = this.http.get(url, { headers });
    return obsStato;

  }
}
