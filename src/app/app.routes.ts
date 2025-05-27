import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { TeamComponent } from './pages/team/team.component';
import { PriceComponent } from './pages/price/price.component';
import { ErrorComponent } from './pages/error/error.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';

export const routes: Routes = [
    {
        path: "", 
        component: HomeComponent
    },
    {
        path: "about", 
        component: AboutComponent
    },
    {
        path: "blogs", 
        component: BlogsComponent
    },
    {
        path: "contact", 
        component: ContactComponent
    },
    {
        path: "services", 
        component: ServicesComponent
    },
    {
        path: "appointment", 
        component: AppointmentComponent
    },
    {
        path: "team", 
        component: TeamComponent
    },
    {
        path: "price", 
        component: PriceComponent
    },
    {
        path: "error", 
        component: ErrorComponent
    },
    {
        path: "gallery", 
        component: GalleryComponent
    },
    {
        path: "blog-single", 
        component: BlogSingleComponent
    },
];
