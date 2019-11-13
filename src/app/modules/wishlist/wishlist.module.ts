import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { BlocksModule } from '../blocks/blocks.module';
import { SharedModule } from '../../shared/shared.module';
import { WishlistRoutingModule } from './wishlist-routing.module';

// pages
import { PageWishlistComponent } from './pages/page-wishlist/page-wishlist.component';


@NgModule({
  declarations: [
    PageWishlistComponent
  ],
  imports: [
    CommonModule,
    // modules
    BlocksModule,
    SharedModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
