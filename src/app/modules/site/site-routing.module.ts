import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'thong-tin-lien-he'
  },
  {
    path: 'thong-tin-lien-he',
    component: PageContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
