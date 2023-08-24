import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit{
  posts: PostModel[] = [];
  columnsToDisplay: String[] = ['id', 'title', 'body'];
  isLoading = false;

  constructor(private postService: PostService,
    private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe({
        next: posts => this.posts = posts,
        error: error => this.notificationService.notify(error.message)
      })
      .add(() => this.isLoading = false);
  }
}
