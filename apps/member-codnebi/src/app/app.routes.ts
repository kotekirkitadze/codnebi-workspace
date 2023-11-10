import { Route } from '@angular/router';
import { LandingComponent } from './pages/landing-page/landing.component';
import { BlogDetailsComponent } from './pages/blog-details-component/blog-details.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'blog-details/:id',
    component: BlogDetailsComponent,
  },
];
