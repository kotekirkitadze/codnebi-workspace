import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../../components/blog-card-component/blog-card.component';

@Component({
  selector: 'codnebi-workspace-landing',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {}
