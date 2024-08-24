import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'loyalty-rewards-dashboard';
  constructor(private Router: Router) {}
  handleRedirection(val: any) {
    this.Router.navigateByUrl(val);
  }
}
