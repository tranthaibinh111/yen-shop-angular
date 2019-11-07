import { Component } from '@angular/core';
import { products } from '../../../../../data/shop-products';
import { Product } from '../../../../shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RootService } from 'src/app/shared/services/root.service';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent {
  products: Product[] = products;
  product: Product;
  layout: 'standard' | 'columnar' | 'sidebar' = 'standard';
  sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

  constructor(private router: Router, private route: ActivatedRoute, public root: RootService) {
    this.route.data.subscribe(data => {
      this.layout = 'layout' in data ? data.layout : this.layout;
      this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
    });
    this.route.params.pipe(map(params => {
      let product: Product;

      if (params.hasOwnProperty('slug')) {
        product = products.find(eachProduct => eachProduct.slug === params.slug);

        if(product)
          this.products = products.filter(eachProduct => eachProduct.id !== product.id);
      }

      if(product)
        return product;
      else
        this.router.navigate(['/khong-tim-thay']);
    })).subscribe(product => this.product = product);
  }
}
