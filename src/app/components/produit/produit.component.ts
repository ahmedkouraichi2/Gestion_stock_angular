import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public   produits :Product[] = [] ;

  produitForm :FormGroup ;
  constructor(private produitService :ProduitService,
     private fb :FormBuilder
    ) {

     this.produitForm = this.fb.group(
      {
        ref:['',Validators.required],
        quantite:['',Validators.required],
        prixUnitaire:['',Validators.required],
      } );


     }

  ngOnInit(): void {
    this.produits = this.produitService.getProduits();
  }

  loadProduit(){
     this.produitService.getProduits();


  }

  addProduit(){
     const p = this.produitForm.value;
     this.produitService.addProduit(p).subscribe(
       res =>{ }
     )
  }

}
