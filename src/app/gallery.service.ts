import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http : HttpClient) { }

  getdataa(pageNumber: number, pageSize: number) 
  {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?_start=${pageNumber}&_limit=${pageSize}`);

    // return this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos')
  }


}
