import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.postsUrl);
  }

  getPost(id: number): Observable<PostModel> {
    const url =  `${this.postsUrl}/${id}`;
    return this.http.get<PostModel>(url);
  }
}
