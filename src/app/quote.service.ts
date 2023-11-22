import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, map, Observable, shareReplay, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  readonly quote$: Observable<any>;
  private readonly quotesBus = new BehaviorSubject<void>(undefined);

  constructor(
    private http: HttpClient
  ) {
    function getRandomArbitrary(min: number, max: number) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    this.quote$ = this.quotesBus.pipe(
      map(() => getRandomArbitrary(1, 100)),
      switchMap((randomId) => this.http.get(
        'https://jsonplaceholder.typicode.com/posts/' + randomId
      )),
      concatMap((post: any) => this.http.get(
        'https://jsonplaceholder.typicode.com/users/' + post.userId
      ).pipe(map((user: any) => Object.assign(post, { user })))),
      tap(console.log),
      shareReplay(1)
    );
  }

  random() {
    this.quotesBus.next();
  }
}
