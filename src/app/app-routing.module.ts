import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSlugs } from './enums/page-slugs';
import { PageTitles } from './enums/page-titles';

// .slice(1) ca elimin /

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: PageSlugs.ARTICLES.slice(1),
    loadChildren: () =>
      import('./modules/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
  },
  {
    path: `${PageSlugs.ARTICLES.slice(1)}/:slug`,
    loadChildren: () =>
      import('./modules/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
  },
  {
    path: PageSlugs.SERVICES.slice(1),
    loadChildren: () =>
      import('./modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: `${PageSlugs.SERVICES.slice(1)}/:slug`,
    loadChildren: () =>
      import('./modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: PageSlugs.ABOUT_US.slice(1),
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: PageSlugs.COLLABORATION.slice(1),
    loadChildren: () =>
      import('./modules/collaboration/collaboration.module').then(
        (m) => m.CollaborationModule
      ),
  },
  // {
  //   path: PageSlugs.HIRING.slice(1),
  //   loadChildren: () =>
  //     import('./modules/hiring/hiring.module').then((m) => m.HiringModule),
  // },
  {
    path: PageSlugs.CONTACT.slice(1),
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }, // redirect pentru rutele neidentificate
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
