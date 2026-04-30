import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowDown, Github, Linkedin, Mail, Twitter, Sparkles, Code2, Rocket } from 'lucide-angular';
import { ContentService } from '../../services/content.service';
import { HeroData, SocialLink } from '../../models/interfaces';
import { fadeInUp, fadeIn } from '../../animations/page.animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [fadeInUp, fadeIn]
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly ArrowDown = ArrowDown;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Twitter = Twitter;
  readonly Sparkles = Sparkles;
  readonly Code2 = Code2;
  readonly Rocket = Rocket;

  heroData: HeroData | null = null;
  socialLinks: SocialLink[] = [];
  currentRole = 0;
  private roleInterval: any;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getHeroData().subscribe(data => {
      this.heroData = data;
      if (data && data.roles.length > 0) {
        this.startRoleRotation();
      }
    });

    this.contentService.getSocialLinks().subscribe(links => {
      if (links) {
        this.socialLinks = links;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.roleInterval) {
      clearInterval(this.roleInterval);
    }
  }

  startRoleRotation(): void {
    this.roleInterval = setInterval(() => {
      if (this.heroData && this.heroData.roles.length > 0) {
        this.currentRole = (this.currentRole + 1) % this.heroData.roles.length;
      }
    }, 3000);
  }

  getIconClass(iconName: string): any {
    const icons: any = {
      'Github': Github,
      'Linkedin': Linkedin,
      'Twitter': Twitter,
      'Mail': Mail
    };
    return icons[iconName] || Github;
  }

  getColorClass(platform: string): string {
    const colors: any = {
      'GitHub': 'hover:bg-gray-900',
      'LinkedIn': 'hover:bg-blue-600',
      'Twitter': 'hover:bg-sky-500',
      'Email': 'hover:bg-red-500'
    };
    return colors[platform] || 'hover:bg-gray-600';
  }

  scrollToSection(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
