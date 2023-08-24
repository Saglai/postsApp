import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '../post.model';

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
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe(post => {
        this.post = post;
        this.isLoading = false;
      })
  }

  goBack(): void {
    this.location.back();
  }
}
