import { Component, Input } from '@angular/core';
import { Post } from '../../../../shared/interfaces/post';
import { PostCommentsList } from '../../../../shared/interfaces/post-comments-list';
import { posts } from '../../../../../data/blog-posts';
import { postComments } from '../../../../../data/blog-post-comments';
import { ActivatedRoute } from '@angular/router';
import { RootService } from 'src/app/shared/services/root.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() layout: 'classic' | 'full' = 'classic';

  post: Post
  posts: Post[] = posts;
  comments: PostCommentsList = postComments;

  constructor(private route: ActivatedRoute, public root: RootService) {
    this.route.params.pipe(map(params => {
      if (params.hasOwnProperty('id')) {
        const post = posts.find(eachPost => eachPost.id === parseInt(params.id));
        this.posts = posts.filter(eachPost => eachPost.id !== parseInt(params.id));

        if (post) {
          return post;
        }
      }

      return posts[posts.length - 1];
    })).subscribe(post => this.post = post);
  }
}
