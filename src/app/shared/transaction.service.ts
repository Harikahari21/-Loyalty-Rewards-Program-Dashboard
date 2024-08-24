import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor() {}

  // Method to fetch the transaction history
  getTransactionHistory(): Observable<any[]> {
    // Mock data for transaction history
    return of([
      { date: '2024-08-01', type: 'Earned', points: 1000 },
      { date: '2024-08-02', type: 'Redeemed', points: 300 },
      { date: '2024-08-03', type: 'Earned', points: 500 },
      { date: '2024-08-04', type: 'Redeemed', points: 200 },
    ]);
  }
}
