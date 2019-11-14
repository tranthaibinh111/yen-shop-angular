// Angular
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// RxJS
import { map } from 'rxjs/operators';

import { Post } from '../../../../shared/interfaces/post';
import { posts } from '../../../../../data/blog-posts';
import { RootService } from '../../../../shared/services/root.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() layout: 'classic' | 'full' = 'classic';

  post: Post;
  posts: Post[] = posts;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    public root: RootService
  ) {
    this.route.params.pipe(map(params => {
      let post: Post;

      if (params.hasOwnProperty('slug')) {
        post = posts.find(eachPost => eachPost.slug === params.slug);

        if (post)
          this.posts = posts.filter(eachPost => eachPost.id !== post.id);
      }

      if (post)
        return post;
      else
        this.router.navigate(['/khong-tim-thay']);
    })).subscribe(post => this.post = post);
  }

  ngOnInit() {
    if (this.post)
      this.title.setTitle(`${this.post.title} - Yến Vàng Miền Nam`);
  }

}
