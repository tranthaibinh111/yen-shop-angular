import { Component } from '@angular/core';
import { RootService } from '../../shared/services/root.service';


@Component({
    selector: 'app-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
    constructor(public root: RootService,) { }
}
