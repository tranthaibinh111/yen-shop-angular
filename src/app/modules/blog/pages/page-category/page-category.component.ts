// Angular
import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// RxJS
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Yen Shop
// Interface
import { Post } from '../../../../shared/interfaces/post';
import { posts } from '../../../../../data/blog-posts';
// Service
import { RootService } from 'src/app/shared/services/root.service';

@Component({
    selector: 'app-category',
    templateUrl: './page-category.component.html',
    styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnDestroy {
    private destroy$: Subject<void> = new Subject();

    sidebarPosition: 'start'|'end' = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
    layout: 'classic'|'grid'|'list' = 'classic';
    header: '';

    posts: Post[] = posts;

    constructor(private title: Title, private route: ActivatedRoute, public root: RootService) {
        this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data.sidebarPosition;
            this.layout = data.layout;
            this.header = 'header' in data ? data.header : this.header;

            // Setting the title head of browser tab
            if (this.header)
                this.title.setTitle(this.header);
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
