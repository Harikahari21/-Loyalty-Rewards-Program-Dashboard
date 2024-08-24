import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsSummaryComponent } from './points-summary/points-summary.component';
import { RewardsCatalogComponent } from './rewards-catalog/rewards-catalog.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

export const routes: Routes = [
  { path: '', component: RewardsCatalogComponent },

  { path: 'rewards-catalog', component: RewardsCatalogComponent },
  { path: 'points-summary', component: PointsSummaryComponent },
  { path: 'redemption', component: RedemptionComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
export class AppRoutingModule {}
