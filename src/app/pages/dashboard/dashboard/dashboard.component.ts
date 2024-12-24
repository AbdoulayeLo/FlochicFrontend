import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Produit} from "../../../model/produit";
import {ProduitService} from "../../../services/produit.service";
import {DashboardService} from "../../../services/dashboard.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgFor,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  tabProduits:Produit[]=[];
  ngOnInit(): void {
    this.getProduit()
    }
    constructor(private dashboardService  : DashboardService, private router: Router, private route: ActivatedRoute) {
    }

  getProduit(){
    this.dashboardService.getAllProduits().subscribe(
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
