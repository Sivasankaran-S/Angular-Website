import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  isMenuOpen = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }
  } /// <reference path="" />
  

/*scrollToElement(targetId: string): void {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}*/