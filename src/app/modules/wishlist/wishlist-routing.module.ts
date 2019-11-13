// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { PageWishlistComponent } from './pages/page-wishlist/page-wishlist.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'yen-sao'
  },
  {
    path: 'yen-sao',
    component: PageWishlistComponent,
    data: {
      header: 'Yến sào'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
