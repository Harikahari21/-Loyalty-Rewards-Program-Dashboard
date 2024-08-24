import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
})
export class TransactionHistoryComponent implements OnInit {
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactionHistory().subscribe((data) => {
      this.transactions = data;
    });
  }
}
