import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule here
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Import FormsModule if using ngModel

import { AppComponent } from './app.component';
import { PointsSummaryComponent } from './points-summary/points-summary.component';
import { RewardsCatalogComponent } from './rewards-catalog/rewards-catalog.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { Router } from '@angular/router';
// import { Router } from 'express';

@NgModule({
  declarations: [
    AppComponent,
    PointsSummaryComponent,
    RewardsCatalogComponent,
    RedemptionComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, // <-- Add CommonModule to imports array
    FormsModule,
    ReactiveFormsModule, // <-- Add FormsModule if using ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private Router: Router) {}
  handleRedirection(val: any) {
    this.Router.navigateByUrl(val);
  }
}
