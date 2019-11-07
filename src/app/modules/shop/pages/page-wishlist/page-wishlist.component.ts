import { Component } from '@angular/core';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { Product } from '../../../../shared/interfaces/product';
import { RootService } from '../../../../shared/services/root.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './page-wishlist.component.html',
    styleUrls: ['./page-wishlist.component.scss']
})
export class PageWishlistComponent {
    constructor(
        public root: RootService,
        public wishlist: WishlistService,
    ) { }

    addedToCartProducts: Product[] = [];
    removedProducts: Product[] = [];

    remove(product: Product): void {
        if (this.removedProducts.includes(product)) {
            return;
        }

        this.removedProducts.push(product);
        this.wishlist.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
}
