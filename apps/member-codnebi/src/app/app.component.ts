import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingComponent } from './pages/landing-page/landing.component';
import { SideNavComponent } from './components/side-nav-component/side-nav.component';
import { HeaderComponent } from './components/header-component/header.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    LandingComponent,
    SideNavComponent,
    HeaderComponent,
  ],
  selector: 'codnebi-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'member-codnebi';
}
