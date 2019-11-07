import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';

// modules
import { BlocksModule } from '../blocks/blocks.module';
import { SharedModule } from '../../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

// components
import { ProductsViewComponent } from './components/products-view/products-view.component';

// pages
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PageProductComponent } from './pages/page-product/page-product.component';

@NgModule({
    declarations: [
        // components
        ProductsViewComponent,
        // pages
        PageCategoryComponent,
        PageProductComponent
    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // modules (third-party)
        CarouselModule,
        // modules
        BlocksModule,
        SharedModule,
        ShopRoutingModule,
    ]
})
export class ShopModule { }
