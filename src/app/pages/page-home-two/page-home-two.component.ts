// Angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// Yen Shop
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
    header: '';

    constructor(private title: Title, private route: ActivatedRoute) {
        this.route.data.subscribe(data => {
            this.header = 'header' in data ? data.header : this.header;

            // Setting the title head of browser tab
            if (this.header)
                this.title.setTitle(this.header);
        });
    }
}
