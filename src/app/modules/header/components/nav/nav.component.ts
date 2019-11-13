import { Component, Input } from '@angular/core';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { RootService } from '../../../../shared/services/root.service';


@Component({
    selector: 'app-header-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    @Input() departments = true;
    @Input() logo = false;
    @Input() search = false;

    constructor(
        public root: RootService,
        public wishlist: WishlistService
    ) { }
}
