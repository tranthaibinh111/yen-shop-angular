// Angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// Yen Shop
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { Product } from '../../../../shared/interfaces/product';
import { RootService } from '../../../../shared/services/root.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './page-wishlist.component.html',
    styleUrls: ['./page-wishlist.component.scss']
})
export class PageWishlistComponent {
    header: '';

    constructor(
        private title: Title,
        private route: ActivatedRoute,
        public root: RootService,
        public wishlist: WishlistService,
    ) { 
        this.route.data.subscribe(data => {
            this.header = 'header' in data ? data.header : this.header;

            // Setting the title head of browser tab
            if (this.header)
                this.title.setTitle(this.header);
        });
    }

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
