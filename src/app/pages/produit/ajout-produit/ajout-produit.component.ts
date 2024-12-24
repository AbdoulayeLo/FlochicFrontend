import {Component, OnInit} from '@angular/core';
import {NgClass, NgFor, NgForOf, NgIf} from "@angular/common";
import {Categorie} from "../../../model/categorie";
import {CategorieService} from "../../../services/categorie.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import * as worker_threads from "node:worker_threads";
import {ProduitService} from "../../../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-produit',
  standalone: true,
  imports: [
    NgForOf,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './ajout-produit.component.html',
  styleUrl: './ajout-produit.component.css'
})
export class AjoutProduitComponent implements OnInit{
  tabCategories:Categorie[]=[];
  selectedCategory: number | string = ''; // Valeur sélectionnée

  //! pour ajout de produit
  verifForm=false;
  ProduitForm=this.formBuilder.group({
    id:[''],
    libelleProd:['',Validators.required],
    codeProd:['',Validators.required],
    description:['',Validators.required],
    prixU:['',Validators.required],
    image:['',Validators.required],
    stock:['',Validators.required],
    qte:['',Validators.required],
    categorie_id:['',Validators.required]
  });

  //!fin

  constructor(private categorieService:CategorieService,
              private formBuilder: FormBuilder,
              private produitService: ProduitService,
              private router:Router) {
  }

  ngOnInit() {
    this.getCategories();
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

  back():void{ // Le retour a la page principal /article
    this.router.navigate(['/burger']);
  }

  addProduit(){
    this.verifForm=true;
    if (this.ProduitForm.invalid){
      console.log("tout les champs sont obligatoires");
      return
    }else {
      console.log(this.ProduitForm.value)
    }
    this.produitService.ajoutProduit(this.ProduitForm.value).subscribe(
      (data)=>{
        this.produitService.getAllProduits()
        console.log(data);
      },
      (error)=>{
        console.log("ajout au niveau d'ajout",error)

      }
    )
    this.back()
  }
}
