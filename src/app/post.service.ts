import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        // tap сообщение пользователю
        tap(_ => console.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      )
  }

  getPost(id: number): Observable<Post> {
    const url =  `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      // tap сообщение пользователю
      tap(_ => console.log('fetched post id={id}')),
      catchError(this.handleError<Post>(`getPost id ${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Добавить вывод сообщение пользователю
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
