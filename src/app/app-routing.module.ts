import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalStates } from './global-states/global.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'stats',
    component: GlobalStates,
  },

  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
