import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PagePostComponent } from './pages/page-post/page-post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tat-ca'
  },
  {
    path: 'tat-ca',
    component: PageCategoryComponent,
    data: {
      sidebarPosition: 'end', // one of [start, end]. For LTR scripts "start" is "left" and "end" is "right"
      layout: 'list' // one of [classic, grid, list]
    }
  },
  {
    path: 'bai-viet/:id',
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
