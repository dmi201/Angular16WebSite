import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborationRoutingModule } from './collaboration-routing.module';
import { CollaborationComponent } from './components/collaboration.component';

@NgModule({
  declarations: [CollaborationComponent],
  imports: [CommonModule, CollaborationRoutingModule],
})
export class CollaborationModule {}
