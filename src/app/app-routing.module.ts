import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeTwoComponent } from './pages/page-home-two/page-home-two.component';
import { RootComponent } from './components/root/root.component';

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
      loadChildren: './modules/category/category.module#CategoryModule'
    },
    {
      path: 'san-pham',
      loadChildren: './modules/shop/shop.module#ShopModule'
    },
    {
      path: 'danh-sach-yeu-thich',
      loadChildren: './modules/wishlist/wishlist.module#WishlistModule'
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
