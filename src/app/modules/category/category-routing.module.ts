import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { PageCategoryComponent } from './pages/page-category/page-category.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'yen-sao-minh-quang'
  },
  {
    path: 'yen-sao-minh-quang',
    component: PageCategoryComponent,
    data: {
      columns: 4,
      viewMode: 'list',
      header: 'Sản phẩm Yến Sào Minh Quang'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
