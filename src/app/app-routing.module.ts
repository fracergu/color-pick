import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component'
import { ColorComponent } from './pages/color/color.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'color/:id',
    component: ColorComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes, {onSameUrlNavigation: 'reload'} )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
