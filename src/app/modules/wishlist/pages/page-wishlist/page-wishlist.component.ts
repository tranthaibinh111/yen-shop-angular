// Angular
import { Component, OnInit } from '@angular/core';
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
export class PageWishlistComponent implements OnInit {
    header: '';
    addedToCartProducts: Product[] = [];
    removedProducts: Product[] = [];

    constructor(
        private title: Title,
        private route: ActivatedRoute,
        public root: RootService,
        public wishlist: WishlistService,
    ) {
        this.route.data.subscribe(data => {
            this.header = 'header' in data ? data.header : this.header;
        });
    }

    ngOnInit() {
      this.title.setTitle('Danh sách sản phẩm Yến Sào yều thích - Yến Vàng Miền Nam');
    }

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
