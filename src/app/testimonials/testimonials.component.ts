import { Component } from '@angular/core';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  reasons = [
    { title: '"Working with Overflow has transformed our IT infrastructure. Their expertise and support have been invaluablese"', description: '-Client Name' }
    
  ];
}
