import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PagePostComponent } from './pages/page-post/page-post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bai-viet-moi'
  },
  {
    path: 'bai-viet-moi',
    component: PageCategoryComponent,
    data: {
      sidebarPosition: 'end', // one of [start, end]. For LTR scripts "start" is "left" and "end" is "right"
      layout: 'list', // one of [classic, grid, list]
      header: 'Bài viết mới về yến sào'
    }
  },
  {
    path: 'bai-viet',
    pathMatch: 'full',
    redirectTo: 'bai-viet/9-tac-dung-cua-yen-sao-doi-voi-suc-khoe-co-the-ban-chua-biet'
  },
  {
    path: 'bai-viet/:slug',
    component: PagePostComponent,
    data: {
      layout: 'full'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
