import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  HeroData,
  AboutData,
  SkillsData,
  ProjectsData,
  ExperienceData,
  ContactData,
  SocialLink
} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly document = inject(DOCUMENT);

  /** Resolves under `<base href>` so GitHub Pages (`/portfolio/`) and `ng serve` (`/`) both work. */
  private readonly dataBaseUrl: string;

  private heroData$ = new BehaviorSubject<HeroData | null>(null);
  private aboutData$ = new BehaviorSubject<AboutData | null>(null);
  private skillsData$ = new BehaviorSubject<SkillsData | null>(null);
  private projectsData$ = new BehaviorSubject<ProjectsData | null>(null);
  private experienceData$ = new BehaviorSubject<ExperienceData | null>(null);
  private contactData$ = new BehaviorSubject<ContactData | null>(null);
  private socialLinks$ = new BehaviorSubject<SocialLink[] | null>(null);

  constructor(private http: HttpClient) {
    const baseHref =
      this.document.querySelector('base')?.getAttribute('href')?.trim() || '/';
    this.dataBaseUrl = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;
    this.loadAllData();
  }

  private dataUrl(file: string): string {
    return `${this.dataBaseUrl}app/data/${file}`;
  }

  private loadAllData(): void {
    this.loadHeroData().subscribe();
    this.loadAboutData().subscribe();
    this.loadSkillsData().subscribe();
    this.loadProjectsData().subscribe();
    this.loadExperienceData().subscribe();
    this.loadContactData().subscribe();
    this.loadSocialLinks().subscribe();
  }

  loadHeroData(): Observable<HeroData> {
    return this.http.get<HeroData>(this.dataUrl('hero.json')).pipe(
      tap(data => this.heroData$.next(data))
    );
  }

  getHeroData(): Observable<HeroData | null> {
    return this.heroData$.asObservable();
  }

  loadAboutData(): Observable<AboutData> {
    return this.http.get<AboutData>(this.dataUrl('about.json')).pipe(
      tap(data => this.aboutData$.next(data))
    );
  }

  getAboutData(): Observable<AboutData | null> {
    return this.aboutData$.asObservable();
  }

  loadSkillsData(): Observable<SkillsData> {
    return this.http.get<SkillsData>(this.dataUrl('skills.json')).pipe(
      tap(data => this.skillsData$.next(data))
    );
  }

  getSkillsData(): Observable<SkillsData | null> {
    return this.skillsData$.asObservable();
  }

  loadProjectsData(): Observable<ProjectsData> {
    return this.http.get<ProjectsData>(this.dataUrl('projects.json')).pipe(
      tap(data => this.projectsData$.next(data))
    );
  }

  getProjectsData(): Observable<ProjectsData | null> {
    return this.projectsData$.asObservable();
  }

  loadExperienceData(): Observable<ExperienceData> {
    return this.http.get<ExperienceData>(this.dataUrl('experience.json')).pipe(
      tap(data => this.experienceData$.next(data))
    );
  }

  getExperienceData(): Observable<ExperienceData | null> {
    return this.experienceData$.asObservable();
  }

  loadContactData(): Observable<ContactData> {
    return this.http.get<ContactData>(this.dataUrl('contact.json')).pipe(
      tap(data => this.contactData$.next(data))
    );
  }

  getContactData(): Observable<ContactData | null> {
    return this.contactData$.asObservable();
  }

  loadSocialLinks(): Observable<SocialLink[]> {
    return this.http.get<SocialLink[]>(this.dataUrl('social.json')).pipe(
      tap(data => this.socialLinks$.next(data))
    );
  }

  getSocialLinks(): Observable<SocialLink[] | null> {
    return this.socialLinks$.asObservable();
  }
}
