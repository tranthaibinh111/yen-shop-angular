// Angular
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// Yen Shop
// Interface
import { Product } from '../../../../shared/interfaces/product';
import { products } from '../../../../../data/shop-products';
// Service
import { RootService } from 'src/app/shared/services/root.service';

@Component({
  selector: 'app-grid',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {
  products: Product[] = products;

  columns: 3 | 4 | 5 = 3;
  viewMode: 'grid' | 'grid-with-features' | 'list' = 'grid';
  sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
  header: '';

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    public root: RootService
  ) {
    this.route.data.subscribe(data => {
      this.columns = 'columns' in data ? data.columns : this.columns;
      this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
      this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
      this.header = 'header' in data ? data.header : this.header;
    });
  }

  ngOnInit() {
    // Setting the title head of browser tab
    if (this.header)
      this.title.setTitle(`${this.header} - Yến Vàng Miền Nam`);
    else
      this.title.setTitle('Danh mục - Yến Vàng Miền Nam');
  }
}
