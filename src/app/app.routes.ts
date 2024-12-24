import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/authentification/login/login.component";
import {RegisterComponent} from "./pages/authentification/register/register.component";
import {AppComponent} from "./app.component";
import {ProduitComponent} from "./pages/produit/produit.component";
import {DashboardComponent} from "./pages/dashboard/dashboard/dashboard.component";
import {AjoutProduitComponent} from "./pages/produit/ajout-produit/ajout-produit.component";

export const routes: Routes = [
  {path:'',component:ProduitComponent},
  {path:'produits',component:ProduitComponent},
  {path:'ajoutProduit',component:AjoutProduitComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
];
