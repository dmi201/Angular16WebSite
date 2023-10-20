import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbsComponent], // exportarea componentei pentru a o folosi în alte module
})
export class BreadcrumbsModule {}
