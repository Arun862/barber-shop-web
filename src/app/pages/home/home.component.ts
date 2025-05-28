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
    
  sponsors = [
    "sponsor-1.png",
    "sponsor-2.png",
    "sponsor-3.png",
    "sponsor-4.png",
    "sponsor-5.png"
  ].flatMap(image => [{ image }, { image }]);


constructor(
    private router: Router
  ){}
route(path: any){
  console.log(path);
  this.router.navigate(path)
}
}
