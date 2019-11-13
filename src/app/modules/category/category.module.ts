import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { BlocksModule } from '../blocks/blocks.module';
import { SharedModule } from '../../shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';

//page
import { PageCategoryComponent } from './pages/page-category/page-category.component';

@NgModule({
  declarations: [
    PageCategoryComponent
  ],
  imports: [
    CommonModule,
    // modules
    BlocksModule,
    SharedModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
