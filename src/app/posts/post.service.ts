import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { PostModel } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError<PostModel[]>('getPosts', []))
      )
  }

  getPost(id: number): Observable<PostModel> {
    const url =  `${this.postsUrl}/${id}`;
    return this.http.get<PostModel>(url)
    .pipe(
      catchError(this.handleError<PostModel>(`getPost id ${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`Error was in ${operation} operation`);
      return of(result as T);
    }
  }
}
