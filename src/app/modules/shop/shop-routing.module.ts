import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PageProductComponent } from './pages/page-product/page-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tat-ca-san-pham'
  },
  {
    path: 'tat-ca-san-pham',
    component: PageCategoryComponent,
    data: {
      columns: 4,
      viewMode: 'list',
      header: 'Tất cả sản phẩm'
    }
  },
  {
    path: 'san-pham',
    pathMatch: 'full',
    redirectTo: 'san-pham/yen-tinh-loai1-100'
  },
  {
    path: 'san-pham/:slug',
    component: PageProductComponent,
    data: {
      layout: 'standard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
