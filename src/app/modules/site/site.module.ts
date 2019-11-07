import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';

// modules
import { BlocksModule } from '../blocks/blocks.module';
import { SharedModule } from '../../shared/shared.module';
import { SiteRoutingModule } from './site-routing.module';

// pages
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';

@NgModule({
    declarations: [
        // pages
        PageContactUsComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        // modules (third-party)
        CarouselModule,
        // modules
        BlocksModule,
        SharedModule,
        SiteRoutingModule
    ]
})
export class SiteModule { }
