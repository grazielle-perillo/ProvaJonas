import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlocksComponent} from './blocks/blocks.component';
import {FormsComponent} from './forms/forms.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
  path: 'dash', component: DashboardComponent
  },
  {
    path: 'cards', component: CardsComponent
  },
  {
    path: 'pricing', component: PricingComponent
  },
  {
    path: 'blocks', component: BlocksComponent
  },
  {
    path: 'forms', component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
