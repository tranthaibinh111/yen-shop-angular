import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { AlertComponent } from './components/alert/alert.component';
import { IconComponent } from './components/icon/icon.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PortCardComponent } from './components/port-card/port-card.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { RatingComponent } from './components/rating/rating.component';
import { PageHomeOneComponent } from './page/page-home-one/page-home-one.component';
import { PageHomeTwoComponent } from './page/page-home-two/page-home-two.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
// Directive
import { ClickDirective } from './directives/click.directive';
import { CollapseDirective } from './directives/collapse.directive';
import { DepartmentsAreaDirective } from './directives/departments-area.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { FakeSlidesDirective } from './directives/fake-slides.directive';
import { OwlPreventClickDirective } from './directives/owl-prevent-click.directive';
// Pipe
import { CurrencyFormatPipe } from './pipe/currency-format.pipe';



@NgModule({
  declarations: [
    AlertComponent,
    IconComponent,
    InputNumberComponent,
    LoadingBarComponent,
    PageHeaderComponent,
    PaginationComponent,
    PortCardComponent,
    ProductComponent,
    ProductCardComponent,
    QuickviewComponent,
    RatingComponent,
    PageHomeOneComponent,
    PageHomeTwoComponent,
    PageNotFoundComponent,
    ClickDirective,
    CollapseDirective,
    DepartmentsAreaDirective,
    DropdownDirective,
    FakeSlidesDirective,
    OwlPreventClickDirective,
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
