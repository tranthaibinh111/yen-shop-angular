import { Component, Input } from '@angular/core';
import { Post } from '../../../../shared/interfaces/post';
import { posts } from '../../../../../data/blog-posts';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from 'src/app/shared/services/root.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() layout: 'classic' | 'full' = 'classic';

  post: Post;
  posts: Post[] = posts;

  constructor(private router: Router, private route: ActivatedRoute, public root: RootService) {
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
}
