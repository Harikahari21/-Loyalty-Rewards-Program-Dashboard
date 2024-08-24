import { Component, OnInit } from '@angular/core';
import { PointsService } from '../shared/points.service';

@Component({
  selector: 'app-points-summary',
  templateUrl: './points-summary.component.html',
  styleUrls: ['./points-summary.component.css'],
})
export class PointsSummaryComponent implements OnInit {
  points: any = {};

  constructor(private pointsService: PointsService) {}

  ngOnInit(): void {
    this.pointsService.getPointsSummary().subscribe((data) => {
      this.points = data;
    });
  }
}
