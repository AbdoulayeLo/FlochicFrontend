import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = '  http://127.0.0.1:8000/api/produits';

  getAllProduits():Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(this.apiUrl);
  }
}
