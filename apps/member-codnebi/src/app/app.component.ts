import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingComponent } from './pages/landing.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,
    LandingComponent],
  selector: 'codnebi-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'member-codnebi';
}
