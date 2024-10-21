import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexusuariosPage } from './indexusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: IndexusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexusuariosPageRoutingModule {}
