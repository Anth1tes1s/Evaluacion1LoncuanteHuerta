import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexusuariosPageRoutingModule } from './indexusuarios-routing.module';

import { IndexusuariosPage } from './indexusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexusuariosPageRoutingModule
  ],
  declarations: [IndexusuariosPage]
})
export class IndexusuariosPageModule {}
