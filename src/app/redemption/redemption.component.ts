import { Component, OnInit } from '@angular/core';
import { RewardsService } from '../shared/rewards.service';

@Component({
  selector: 'app-reward-redemption',
  templateUrl: './redemption.component.html',
  styleUrls: ['./redemption.component.css'],
})
export class RedemptionComponent implements OnInit {
  rewards: any[] = [];
  selectedReward: any = null;
  redemptionMessage: string = '';

  constructor(private rewardsService: RewardsService) {}

  ngOnInit(): void {
    // Fetch the rewards catalog when the component initializes
    this.rewardsService.getRewardsCatalog().subscribe((data) => {
      this.rewards = data;
    });
  }

  // Method to select a reward for redemption
  selectReward(reward: any): void {
    this.selectedReward = reward;
  }

  // Method to redeem the selected reward
  redeem(): void {
    if (this.selectedReward) {
      this.rewardsService
        .redeemReward(this.selectedReward)
        .subscribe((response) => {
          if (response.success) {
            this.redemptionMessage = `You have successfully redeemed: ${this.selectedReward.name}`;
            this.selectedReward = null;
          } else {
            this.redemptionMessage =
              'Failed to redeem reward. Please try again.';
          }
        });
    }
  }
}
