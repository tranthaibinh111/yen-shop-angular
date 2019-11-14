// Angular
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Yen Shop
import { products } from '../../../data/shop-products';
import { posts } from '../../../data/blog-posts';

@Component({
    selector: 'app-page-home-two',
    templateUrl: './page-home-two.component.html',
    styleUrls: ['./page-home-two.component.scss']
})
export class PageHomeTwoComponent implements OnInit {
    products = products;
    posts = posts;
    header: '';

    constructor(private title: Title) { }

    ngOnInit() {
      this.title.setTitle('Yến Vàng Miền Nam - Chuyên cung cấp các sản phẩm Yến Sào Minh Quang');
    }
}
