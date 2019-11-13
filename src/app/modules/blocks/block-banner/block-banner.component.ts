import { Component } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
    selector: 'app-block-banner',
    templateUrl: './block-banner.component.html',
    styleUrls: ['./block-banner.component.scss']
})
export class BlockBannerComponent {
    constructor(public store: StoreService) { }
}
