import { Component, OnInit } from '@angular/core';
import { RewardsService } from '../shared/rewards.service';

@Component({
  selector: 'app-rewards-catalog',
  templateUrl: './rewards-catalog.component.html',
  styleUrls: ['./rewards-catalog.component.css'],
})
export class RewardsCatalogComponent implements OnInit {
  rewards: any[] = [];

  constructor(private rewardsService: RewardsService) {}

  ngOnInit(): void {
    this.rewardsService.getRewardsCatalog().subscribe((data) => {
      this.rewards = data;
    });
  }

  redeem(reward: any) {
    this.rewardsService.redeemReward(reward).subscribe((response) => {
      if (response.success) {
        alert('Reward redeemed successfully!');
      }
    });
  }
}
