import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { HiringComponent } from './components/hiring.component';

@NgModule({
  declarations: [HiringComponent],
  imports: [CommonModule, HiringRoutingModule],
})
export class HiringModule {}
