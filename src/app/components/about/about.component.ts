import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Award, Coffee, Users, Rocket } from 'lucide-angular';
import { ContentService } from '../../services/content.service';
import { AboutData } from '../../models/interfaces';
import { fadeInUp, slideInLeft, slideInRight } from '../../animations/page.animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInUp, slideInLeft, slideInRight]
})
export class AboutComponent implements OnInit, OnDestroy {
  readonly Award = Award;
  readonly Coffee = Coffee;
  readonly Users = Users;
  readonly Rocket = Rocket;

  aboutData: AboutData | null = null;
  private observer: IntersectionObserver | null = null;
  counters: { [key: string]: number } = {};

  @ViewChildren('statElement') statElements!: QueryList<ElementRef>;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getAboutData().subscribe(data => {
      this.aboutData = data;
      if (data) {
        data.stats.forEach(stat => {
          this.counters[stat.label] = 0;
        });
        this.setupIntersectionObserver();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
        }
      });
    }, { threshold: 0.5 });

    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        this.observer?.observe(element);
      }
    }, 100);
  }

  animateCounters(): void {
    if (!this.aboutData) return;

    this.aboutData.stats.forEach(stat => {
      this.animateCounter(stat.label, stat.value, 2000);
    });
  }

  animateCounter(label: string, target: number, duration: number): void {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      this.counters[label] = Math.floor(target * progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }

  getIconClass(iconName: string): any {
    const icons: any = {
      'Rocket': Rocket,
      'Users': Users,
      'Coffee': Coffee,
      'Award': Award
    };
    return icons[iconName] || Rocket;
  }

  scrollToSection(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
