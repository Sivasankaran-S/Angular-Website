import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports:[NgFor],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { title: 'IT Consulting', description: 'Tailored solutions to optimize your business operations.' },
    { title: 'Cybersecurity', description: 'Protect your data with our advanced security measures.' },
    { title: 'Cloud Services', description: 'Seamless integration and management of cloud solutions.' },
    { title: 'Software Development', description: 'Custom software tailored to your business needs.' },
    { title: 'Support & Maintenance', description: 'Ongoing support to keep your systems running smoothly.' }
  ];
}
