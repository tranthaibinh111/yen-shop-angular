// Angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Yen Shop
import { StoreService } from '../../../../shared/services/store.service'

@Component({
    selector: 'app-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss']
})
export class PageContactUsComponent {
    constructor(private title: Title, public store: StoreService) { 
        this.title.setTitle('Yến vàng miền Nam: thông tin liên hệ');
    }
}
