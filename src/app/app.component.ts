import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMainContent = true;  // Variable pour contrôler l'affichage du contenu principal

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      // Vérifiez si la route active est "/visage" ou "/corps"
      const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
      
      // Ne pas afficher le contenu principal pour "/visage" et "/corps"
      this.showMainContent = currentRoute !== 'visage' && currentRoute !== 'corps';
    });
  }
}
