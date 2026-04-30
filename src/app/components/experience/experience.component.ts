import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, GraduationCap, Calendar, MapPin, Award, TrendingUp } from 'lucide-angular';
import { ContentService } from '../../services/content.service';
import { ExperienceData } from '../../models/interfaces';
import { fadeInUp } from '../../animations/page.animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [fadeInUp]
})
export class ExperienceComponent implements OnInit {
  readonly Briefcase = Briefcase;
  readonly GraduationCap = GraduationCap;
  readonly Calendar = Calendar;
  readonly MapPin = MapPin;
  readonly Award = Award;
  readonly TrendingUp = TrendingUp;

  experienceData: ExperienceData | null = null;
  hoveredIndex: number | null = null;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getExperienceData().subscribe(data => {
      this.experienceData = data;
    });
  }

  setHoveredIndex(index: number | null): void {
    this.hoveredIndex = index;
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
