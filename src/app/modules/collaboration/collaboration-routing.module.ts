import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationComponent } from './components/collaboration.component';

const routes: Routes = [{ path: '', component: CollaborationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollaborationRoutingModule {}
