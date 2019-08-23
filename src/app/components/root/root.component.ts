import { Component, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from "@angular/common";
import { RootService } from '../../shared/services/root.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  headerLayout: string;
  windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public root: RootService,
    public router: Router,
    public route: ActivatedRoute,
    public store: StoreService
  ) {
    this.route.data.subscribe(data => this.headerLayout = data.headerLayout);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
