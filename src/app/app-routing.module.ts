import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { AboutPage } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'about',
    component: AboutPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
