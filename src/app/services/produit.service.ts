import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   api :string = environment.api_url ;
 private PRODUITS :Product[] = [] ;
  constructor(private http :HttpClient) {
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


   public addProduit(produit: Product):Observable<any>{
    return this.http.post(`API_URLS `,produit);

   }


   public updateProduit(produit :Product):Observable<any>{
      return this.http.put('API_URLS' ,produit);
   }

   deleteProduit(ref :string):Observable<any>{
     return this.http.delete('API_URLS' + `/${ref}`)
   }
}
