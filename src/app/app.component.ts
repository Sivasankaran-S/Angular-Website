import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ServicesComponent,FooterComponent,WhyChooseUsComponent,ProjectsComponent,ContactComponent,
    HeroComponent,TestimonialsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Website';

  
  isMenuOpen = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }
  
}
/**
 scrollToElement(targetId: string): void {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
 */