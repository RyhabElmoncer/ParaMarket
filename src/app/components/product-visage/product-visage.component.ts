import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';  // Importez le service
import { CartService } from '../../services/cart.service'; // Importer le service

@Component({
  selector: 'app-product-visage',
  templateUrl: './product-visage.component.html',
  styleUrls: ['./product-visage.component.css']
})
export class ProductVisageComponent implements OnInit {

  products: any[] = [];  // Tableau pour stocker les produits

  constructor(private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.loadProducts();  // Charger les produits au démarrage
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;  // Affecter les données reçues au tableau de produits
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }

    // Ajouter un produit au panier
    addToCart(product: any): void {
      this.cartService.addToCart(product);
      alert(`${product.name} a été ajouté au panier !`);
    }
}
