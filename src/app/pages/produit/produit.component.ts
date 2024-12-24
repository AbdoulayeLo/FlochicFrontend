import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../model/produit";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{
  tabProduits:Produit[]=[];

  constructor(private produitService: ProduitService,
              private router: Router)  {
  }

  ngOnInit() {
    this.getProduit()
    console.log(this.getProduit())
  }

  //     this.getProduit()
  getProduit(){
    this.produitService.getAllProduits().subscribe(
      (data:Produit[])=>{
        this.tabProduits=data;
        console.log(this.tabProduits);
      },
      (error)=>{
        console.log('Aucun produit recuperer',error.message);
        // console.log(this.tabProduits);
      }
    )
  }
}
