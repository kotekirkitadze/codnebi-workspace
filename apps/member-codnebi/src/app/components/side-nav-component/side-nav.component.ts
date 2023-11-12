import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title-component/title.component';

@Component({
  selector: 'codnebi-workspace-side-nav',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {}
