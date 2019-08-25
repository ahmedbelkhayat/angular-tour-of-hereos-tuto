import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {AddHeroComponent} from './add-hero/add-hero.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: 'home', component: DashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'suscribe', component: AddHeroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
