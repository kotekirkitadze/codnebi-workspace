import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title-component/title.component';

@Component({
  selector: 'codnebi-workspace-header',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
