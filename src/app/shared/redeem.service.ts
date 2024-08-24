import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RewardsService {
  private rewardsCatalogUrl = 'api/rewardsCatalog'; // URL to web API endpoint for rewards catalog
  private redeemRewardUrl = 'api/redeemReward'; // URL to web API endpoint for redeeming a reward

  constructor(private http: HttpClient) {}

  // Fetch the rewards catalog
  getRewardsCatalog(): Observable<any[]> {
    return this.http.get<any[]>(this.rewardsCatalogUrl);
  }

  // Redeem a specific reward
  redeemReward(reward: any): Observable<any> {
    return this.http.post<any>(this.redeemRewardUrl, reward);
  }
}
