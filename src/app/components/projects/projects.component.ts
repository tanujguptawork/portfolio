import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, Star } from 'lucide-angular';
import { ContentService } from '../../services/content.service';
import { ProjectsData, Project } from '../../models/interfaces';
import { fadeInUp, scaleIn } from '../../animations/page.animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fadeInUp, scaleIn]
})
export class ProjectsComponent implements OnInit {
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly Star = Star;

  projectsData: ProjectsData | null = null;
  filteredProjects: Project[] = [];
  selectedCategory = 'All';
  hoveredIndex: number | null = null;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getProjectsData().subscribe(data => {
      this.projectsData = data;
      if (data) {
        this.filteredProjects = data.projects;
      }
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (!this.projectsData) return;
    
    this.filteredProjects = category === 'All'
      ? this.projectsData.projects
      : this.projectsData.projects.filter(p => p.category === category);
  }

  setHoveredIndex(index: number | null): void {
    this.hoveredIndex = index;
  }
}
