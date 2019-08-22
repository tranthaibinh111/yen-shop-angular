import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCategoryComponent } from './pages/page-category/page-category.component';

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
      columns: 4,
      viewMode: 'list',
      header: 'Tất cả sản phẩm'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
