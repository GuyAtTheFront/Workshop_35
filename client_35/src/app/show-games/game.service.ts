import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private URL: string = "http://localhost:8080/api/games";


  nameChanges$ = new Subject<any>;


  constructor(private httpClient: HttpClient) {}

  getGames(limit: number, offset: number) {

    console.log("limit: ", limit, "offset: ", offset);

    let params = new HttpParams()
              .append("limit", limit)
              .append("offset", offset);

    this.httpClient.get(this.URL, {params})
        .subscribe(data => this.nameChanges$.next(data));

    // this.httpClient.get(this.URL)
    // .subscribe( data => console.log(data));
        
  }


}
