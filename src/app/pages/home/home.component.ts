import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
    
   sponsors= [
     {
      image: "sponsor-1.png"
    },

    {
      image: "sponsor-2.png"
    },

    {
      image: "sponsor-3.png"
    }, 

    {
     image: "sponsor-4.png"
    },

  {
    image: "sponsor-5.png"
  },

    {
      image: "sponsor-1.png"
    },

    {
      image: "sponsor-2.png"
    },

    {
      image: "sponsor-3.png"
    }, 

    {
     image: "sponsor-4.png"
    },

  {
    image: "sponsor-5.png"
  }
];


constructor(
    private router: Router
  ){}
route(path: any){
  console.log(path);
  this.router.navigate(path)
}
}
