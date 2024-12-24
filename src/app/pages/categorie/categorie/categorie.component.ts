import {Component, OnInit} from '@angular/core';
import {Categorie} from "../../../model/categorie";
import {CategorieService} from "../../../services/categorie.service";
import {Produit} from "../../../model/produit";

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit{
  tabCategories:Categorie[]=[];

  constructor(private categorieService:CategorieService) {
  }

  ngOnInit() {
    this.getCategories()
  }
  getCategories() {
    this.categorieService.getAllProduits().subscribe(
      (data:Categorie[])=>{
        console.log(data)
        this.tabCategories=data;

      },
      (error)=>{
        console.log('Aucun produit recuperer',error.message);
      }
    )
  }
}
