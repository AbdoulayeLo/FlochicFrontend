import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit";
import {Categorie} from "../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = '  http://127.0.0.1:8000/api/categories';

  getAllProduits():Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(this.apiUrl);
  }


}
