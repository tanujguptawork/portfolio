import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Heart, Code2, Github, Linkedin, Twitter, Mail } from 'lucide-angular';
import { ContentService } from '../../services/content.service';
import { SocialLink } from '../../models/interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  readonly Heart = Heart;
  readonly Code2 = Code2;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Mail = Mail;

  currentYear = new Date().getFullYear();
  socialLinks: SocialLink[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getSocialLinks().subscribe(links => {
      if (links) {
        this.socialLinks = links;
      }
    });
  }

  getIconClass(iconName: string): any {
    const icons: any = {
      'Github': Github,
      'Linkedin': Linkedin,
      'Twitter': Twitter,
      'Mail': Mail
    };
    return icons[iconName] || Code2;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
