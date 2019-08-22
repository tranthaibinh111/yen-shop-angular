import { Component } from '@angular/core';
import { products } from '../../../../../data/shop-products';
import { Product } from '../../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../../../../../data/shop-widget-categories';
import { map } from 'rxjs/operators';
import { RootService } from 'src/app/shared/services/root.service';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent {
  categories = categories;
  products: Product[] = products;
  product: Product;
  layout: 'standard' | 'columnar' | 'sidebar' = 'standard';
  sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

  constructor(private route: ActivatedRoute, public root: RootService) {
    this.route.data.subscribe(data => {
      this.layout = 'layout' in data ? data.layout : this.layout;
      this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
    });
    this.route.params.pipe(map(params => {
      if (params.hasOwnProperty('id')) {
        const product = products.find(eachProduct => eachProduct.id === parseInt(params.id));
        this.products = products.filter(eachProduct => eachProduct.id !== parseInt(params.id));

        if (product) {
          return product;
        }
      }

      return products[products.length - 1];
    })).subscribe(product => this.product = product);
  }
}
