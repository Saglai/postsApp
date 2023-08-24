import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../post.model';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: PostModel | undefined;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe({
        next: post => this.post = post,
        error: error => this.notificationService.notify(error.message)
      })
      .add(() => this.isLoading = false);
  }

  goBack(): void {
    this.location.back();
  }
}
