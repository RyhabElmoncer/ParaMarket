import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/data/product-visage.json'; // chemin vers le fichier JSON
  private apiUrl2 = 'assets/data/product-corps.json'; // chemin vers le fichier JSON


  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProducts_corsps(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2);
  }

  
}
