import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexconductorPageRoutingModule } from './indexconductor-routing.module';

import { IndexconductorPage } from './indexconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexconductorPageRoutingModule
  ],
  declarations: [IndexconductorPage]
})
export class IndexconductorPageModule {}
