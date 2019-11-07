import { Component } from '@angular/core';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { RootService } from 'src/app/shared/services/root.service';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {
  constructor(
    public root: RootService,
    public menu: MobileMenuService,
    public wishlist: WishlistService,
  ) { }
}
