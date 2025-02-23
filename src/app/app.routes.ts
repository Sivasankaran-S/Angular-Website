import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [
    {path:'',component:HeaderComponent},
    {path:'services',component:ServicesComponent},
    {path:'testimonial',component:TestimonialsComponent},
    {path:'why-choose-us',component:WhyChooseUsComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'contact',component:ContactComponent}
];
