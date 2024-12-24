import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = '  http://127.0.0.1:8000/api/produits';

  getAllProduits():Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(this.apiUrl);
  }

  getProduitById(id:any){
    return this.httpClient.get<Produit>("https://localhost:8080/api/produits/"+id);
  }
  ajoutProduit(produit:any):Observable<any>{
    return this.httpClient.post<any>("https://localhost:8080/api/produits", produit);
  }
}


