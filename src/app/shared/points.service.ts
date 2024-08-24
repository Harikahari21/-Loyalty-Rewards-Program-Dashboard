import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  constructor() {}

  getPointsSummary(): Observable<any> {
    return of({
      balance: 1200,
      earned: [
        { activity: 'Purchase', points: 1000 },
        { activity: 'Referral', points: 200 },
      ],
      expiringSoon: 100,
    });
  }
}
