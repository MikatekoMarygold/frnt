import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertyListComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties = [
    { name: 'House in New York', description: 'A beautiful house in NY', price: 500000 },
    { name: 'Villa in Miami', description: 'Luxurious villa in Miami', price: 850000 }
  ];
  
  constructor() { }

  ngOnInit(): void { }
}


// property.service.ts
import { Injectable } from '@angular/core';

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  description: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'Beautiful Family Home',
      price: 300000,
      location: 'New York',
      description: 'A lovely family home with 4 bedrooms and a spacious garden.',
      images: ['https://via.placeholder.com/300?text=Property+1']
    },
    {
      id: 2,
      title: 'Luxury Apartment',
      price: 500000,
      location: 'Los Angeles',
      description: 'A modern apartment with stunning city views.',
      images: ['https://via.placeholder.com/300?text=Property+2']
    },
    // Add more properties as needed
  ];

  getAllProperties() {
    return this.properties;
  }

  getPropertyById(id: number) {
    return this.properties.find(property => property.id === id);
  }
}


// property-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PropertyService, Property } from '../property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit(): void {
    this.properties = this.propertyService.getAllProperties();
  }

  viewProperty(id: number) {
    this.router.navigate(['/property', id]);
  }
}



