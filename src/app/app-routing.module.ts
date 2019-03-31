import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CacloaisachComponent} from './cacloaisach/cacloaisach.component';
import {SachdadocComponent} from './sachdadoc/sachdadoc.component';

const routes: Routes = [
  {
    path: 'danhsach',
    component: CacloaisachComponent
  },
  {
    path: 'sachdadoc',
    component: SachdadocComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
