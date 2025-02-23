import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  imports:[NgFor],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {
  reasons = [
    { title: 'Expertise', description: 'Our team is comprised of certified professionals with years of experience.' },
    { title: 'Innovation', description: 'We stay ahead of the curve with the latest technology trends.' },
    { title: 'Customer Focus', description: 'Your success is our priority, and we work closely with you to achieve your goals.' },
    { title: 'Reliability', description: 'We provide dependable and efficient services to ensure your business thrives.' }
  ];
}
