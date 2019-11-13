import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../../shared/shared.module';

// components
import { HeaderComponent } from './header.component';
import { LinksComponent } from './components/links/links.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
    declarations: [
        // components
        HeaderComponent,
        LinksComponent,
        MegamenuComponent,
        MenuComponent,
        NavComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,
        // modules
        SharedModule
    ],
    exports: [
        // components
        HeaderComponent
    ]
})
export class HeaderModule { }
