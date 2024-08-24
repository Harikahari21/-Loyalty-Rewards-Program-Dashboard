import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RewardsService {
  constructor() {}

  // Method to fetch the rewards catalog
  getRewardsCatalog(): Observable<any[]> {
    // Mock data for rewards catalog
    return of([
      {
        name: '10% Off',
        description: 'Get 10% off your next purchase.',
        points: 500,
      },
      {
        name: 'Free Coffee',
        description: 'Enjoy a free coffee at our store.',
        points: 300,
      },
      {
        name: 'Movie Ticket',
        description: 'Get a free movie ticket.',
        points: 700,
      },
      {
        name: 'Gift Card',
        description: 'Receive a $20 gift card.',
        points: 1000,
      },
    ]);
  }

  // Method to simulate redeeming a reward
  redeemReward(reward: any): Observable<any> {
    // Simulate a successful redemption response
    return of({ success: true });
  }
}
