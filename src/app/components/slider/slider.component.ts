import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  images: string[] = ['./assets/image/cont.PNG', './assets/image/fem.png']; // Remplacez par vos chemins d'image
  activeIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 3000); // Change toutes les 3 secondes
  }
}
