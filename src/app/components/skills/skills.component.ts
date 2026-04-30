import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Layers, 
  Zap 
} from 'lucide-angular';
import { ContentService } from '../../services/content.service';
import { SkillsData } from '../../models/interfaces';
import { fadeInUp, scaleIn } from '../../animations/page.animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule, 
    LucideAngularModule
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [fadeInUp, scaleIn]
})
export class SkillsComponent implements OnInit {
  readonly Code2 = Code2;
  readonly Database = Database;
  readonly Server = Server;
  readonly Globe = Globe;
  readonly Layers = Layers;
  readonly Zap = Zap;

  skillsData: SkillsData | null = null;
  selectedCategory: number | null = null;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getSkillsData().subscribe(data => {
      this.skillsData = data;
    });
  }

  getIconForCategory(iconName: string): any {
    const icons: any = {
      'Code2': Code2,
      'Server': Server,
      'Database': Database,
      'Globe': Globe,
      'Layers': Layers,
      'Zap': Zap
    };
    return icons[iconName] || Code2;
  }

  toggleCategory(index: number): void {
    this.selectedCategory = this.selectedCategory === index ? null : index;
  }

  isExpanded(index: number): boolean {
    return this.selectedCategory === index;
  }
}
