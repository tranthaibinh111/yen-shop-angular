import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageProductComponent } from './pages/page-product/page-product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'yen-tinh-loai1-100'
  },
  {
    path: ':slug',
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
