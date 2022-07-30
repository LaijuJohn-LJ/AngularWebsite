import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpclient: any;

  constructor(private http: HttpClient) { }
  getProduct() {
    return this.http.get<any>("https://dummyjson.com/products?limit=100")
      .pipe(map((res: any) => {
        return res.products;

      }))

  }
  getBrandForselectedAlbumbyparameter(selectedAlbumId: string): Observable<any> {
    let params1 = new HttpParams().set('id', selectedAlbumId);
    return this.httpclient.get("https://https://dummyjson.com/products?limit=100", { params: 1 })
  }
}
