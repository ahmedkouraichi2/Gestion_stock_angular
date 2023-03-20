import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 private PRODUITS :Product[] = [] ;
  constructor() {
    let p1 :Product = new Product('Livre' , 20 ,20);
    let p2 :Product = new Product('Cahier' , 200 ,25);
    let p3 :Product = new Product('stylo' , 50 ,20);
     
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);

   }

   public getProduits():Product[]{
     return this.PRODUITS ;
   }
}
