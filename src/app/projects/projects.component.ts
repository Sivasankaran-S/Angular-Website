import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  reasons = [
    { title: 'Project A', description: 'Successfully implemented a cloud migration for [Client Name].' },
    { title: 'Project B', description: 'Enhanced cybersecurity measures for [Client Name].' },
    { title: 'Project C', description: 'Developed custom software for [Client Name].' },
    
  ];
}
