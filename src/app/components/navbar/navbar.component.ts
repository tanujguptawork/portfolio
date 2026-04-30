import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Code2, Menu, X } from 'lucide-angular';
import { fadeIn } from '../../animations/page.animations';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fadeIn]
})
export class NavbarComponent implements OnInit {
  readonly Code2 = Code2;
  readonly Menu = Menu;
  readonly X = X;
  
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = '';

  navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  ngOnInit(): void {
    this.checkActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.checkActiveSection();
  }

  checkActiveSection(): void {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    this.activeSection = current || '';
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  isActive(href: string): boolean {
    return this.activeSection === href.substring(1);
  }

  scrollToSection(event: Event, href: string): void {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMobileMenu();
  }
}
