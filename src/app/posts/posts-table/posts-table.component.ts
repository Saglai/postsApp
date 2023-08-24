import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit{
  posts: PostModel[] = [];
  columnsToDisplay: String[] = ['id', 'title', 'body'];
  isLoading = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
        this.isLoading = false;
      })
  }
}
