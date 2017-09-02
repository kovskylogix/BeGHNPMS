import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigComponent } from './navig.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { routingComponents } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    
  ],
  declarations: [NavigComponent
  , routingComponents 
  ]
})
export class NavigModule { }
