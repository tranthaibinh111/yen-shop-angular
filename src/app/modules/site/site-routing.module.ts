import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'thong-tin-lien-he'
  },
  {
    path: 'yen-sao-mien-nam',
    component: PageAboutUsComponent
  },
  {
    path: 'chinh-sach-giao-hang',
    component: PageTermsComponent
  },
  {
    path: 'cau-hoi-thuong-gap',
    component: PageFaqComponent
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
