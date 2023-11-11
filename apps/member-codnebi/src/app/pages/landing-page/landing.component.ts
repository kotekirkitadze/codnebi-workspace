import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../../components/blog-card-component/blog-card.component';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header-component/header.component';
import { SideNavComponent } from '../../components/side-nav-component/side-nav.component';
import { BlogListComponent } from '../blog-list/blog-list.component';

@Component({
  selector: 'codnebi-workspace-landing',
  standalone: true,
  imports: [
    CommonModule,
    BlogCardComponent,
    HeaderComponent,
    SideNavComponent,
    BlogListComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  router = inject(Router);
  onBlogDetails(id: Event) {
    id;
    this.router.navigateByUrl('/blog-details/' + 1);
  }
  toBlogs() {
    this.router.navigateByUrl('/blogs');
  }
}
