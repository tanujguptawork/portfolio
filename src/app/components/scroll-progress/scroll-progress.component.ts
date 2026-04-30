import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.css']
})
export class ScrollProgressComponent {
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
  }
}
