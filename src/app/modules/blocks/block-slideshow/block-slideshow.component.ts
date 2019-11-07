import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from '../../../shared/services/direction.service';
import { RootService } from 'src/app/shared/services/root.service';

@Component({
    selector: 'app-block-slideshow',
    templateUrl: './block-slideshow.component.html',
    styleUrls: ['./block-slideshow.component.scss']
})
export class BlockSlideshowComponent {
    @Input() withDepartments = false;

    options = {
        nav: false,
        dots: true,
        loop: true,
        responsive: {
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };

    slides = [
        {
            title: 'Yến Vàng Miền Nam',
            text: 'Chăm sóc cho sức khỏe là chăm sóc tương lai.',
            image_classic: 'assets/images/slides/slide-1.webp',
            image_full: 'assets/images/slides/slide-1-full.webp',
            image_mobile: 'assets/images/slides/slide-1-mobile.webp'
        },
        {
            title: 'Mr. Thắng<br>094 280 1401 (zalo)',
            text: 'Hân hạnh được tư vấn cho bạn.',
            image_classic: 'assets/images/slides/slide-2.webp',
            image_full: 'assets/images/slides/slide-2-full.webp',
            image_mobile: 'assets/images/slides/slide-2-mobile.webp'
        },
        {
            title: 'Ms. Ngân<br>039 573 5218 (zalo)',
            text: 'Sức khỏe của bạn là sự thành công của chúng tôi',
            image_classic: 'assets/images/slides/slide-3.webp',
            image_full: 'assets/images/slides/slide-3-full.webp',
            image_mobile: 'assets/images/slides/slide-3-mobile.webp'
        }
    ];

    constructor(
        public sanitizer: DomSanitizer,
        public root: RootService,
        private direction: DirectionService
    ) { }
}
