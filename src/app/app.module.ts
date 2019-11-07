import { /*LOCALE_ID, */NgModule } from '@angular/core';
// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';
//
// registerLocaleData(localeIt, 'it');

// modules (angular)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';

// modules
import { AppRoutingModule } from './app-routing.module';
import { BlocksModule } from './modules/blocks/blocks.module';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { MobileModule } from './modules/mobile/mobile.module';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';

// pages
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeTwoComponent } from './pages/page-home-two/page-home-two.component';
import { PageWishlistComponent } from './modules/shop/pages/page-wishlist/page-wishlist.component';

@NgModule({
    declarations: [
        // components
        AppComponent,
        RootComponent,
        // pages
        PageNotFoundComponent,
        PageHomeTwoComponent,
        PageWishlistComponent
    ],
    imports: [
        // modules (angular)
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        // modules (third-party)
        CarouselModule,
        ToastrModule.forRoot(),
        // modules
        AppRoutingModule,
        BlocksModule,
        FooterModule,
        HeaderModule,
        MobileModule,
        SharedModule,
    ],
    providers: [
        // { provide: LOCALE_ID, useValue: 'it' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
