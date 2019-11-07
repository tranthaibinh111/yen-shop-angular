import { Component } from '@angular/core';
import { products } from '../../../data/shop-products';
import { posts } from '../../../data/blog-posts';

@Component({
    selector: 'app-page-home-two',
    templateUrl: './page-home-two.component.html',
    styleUrls: ['./page-home-two.component.scss']
})
export class PageHomeTwoComponent {
    products = products;
    posts = posts;

    constructor() { }
}
