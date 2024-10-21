import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexconductorPage } from './indexconductor.page';

const routes: Routes = [
  {
    path: '',
    component: IndexconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexconductorPageRoutingModule {}
