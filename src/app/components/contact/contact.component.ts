import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LucideAngularModule, Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-angular';
import { ContentService } from '../../services/content.service';
import { ContactData, SocialLink } from '../../models/interfaces';
import { fadeInUp } from '../../animations/page.animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInUp]
})
export class ContactComponent implements OnInit {
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly Send = Send;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;

  contactData: ContactData | null = null;
  socialLinks: SocialLink[] = [];
  contactForm!: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  constructor(
    private contentService: ContentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contentService.getContactData().subscribe(data => {
      this.contactData = data;
      this.initializeForm();
    });

    this.contentService.getSocialLinks().subscribe(links => {
      if (links) {
        this.socialLinks = links;
      }
    });
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        setTimeout(() => {
          this.submitSuccess = false;
        }, 3000);
      }, 1000);
    }
  }

  getIconClass(iconName: string): any {
    const icons: any = {
      'Github': Github,
      'Linkedin': Linkedin,
      'Twitter': Twitter,
      'Mail': Mail
    };
    return icons[iconName] || Mail;
  }
}
