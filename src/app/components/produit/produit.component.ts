import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public   produits :Product[] = [] ;
  constructor(private produitService :ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.getProduits();
  }

}
