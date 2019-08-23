import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from '../../shared/services/root.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  headerLayout: string;

  constructor(
    public root: RootService,
    public router: Router,
    public route: ActivatedRoute,
    public store: StoreService
  ) {
    this.route.data.subscribe(data => this.headerLayout = data.headerLayout);
  }
}
