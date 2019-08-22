import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeTwoComponent } from './pages/page-home-two/page-home-two.component';
import { PageProductComponent } from './modules/shop/pages/page-product/page-product.component';
import { RootComponent } from './components/root/root.component';
import { PageWishlistComponent } from './modules/shop/pages/page-wishlist/page-wishlist.component';

export function makeRoutes(homeComponent: Type<any>): Routes {
  return [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'trang-chu'
    },
    {
      path: 'trang-chu',
      component: homeComponent
    },
    {
      path: 'blog',
      loadChildren: './modules/blog/blog.module#BlogModule'
    },
    {
      path: 'danh-muc',
      loadChildren: './modules/shop/shop.module#ShopModule'
    },
    {
      path: 'san-pham',
      pathMatch: 'full',
      redirectTo: 'san-pham/1'
    },
    {
      path: 'san-pham/:id',
      component: PageProductComponent,
      data: {
        layout: 'standard'
      }
    },
    {
      path: 'danh-sach-yeu-thich',
      component: PageWishlistComponent
    },
    {
      path: 'gioi-thieu',
      loadChildren: './modules/site/site.module#SiteModule'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
}

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    data: {
      headerLayout: 'compact'
    },
    children: makeRoutes(PageHomeTwoComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
