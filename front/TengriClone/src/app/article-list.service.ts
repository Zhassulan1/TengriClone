import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {
  BASE_URL = 'http://127.0.0.1:8000/api/category';
  constructor(private client: HttpClient) { }

  // getAlbums(): Observable<Article[]> {
  //   return this.client.get<Article[]>(`${this.BASE_URL}/Article`);
  // }

  // getAlbum(id: number): Observable<Article> {
  //   return this.client.get<Article>(`${this.BASE_URL}/Article/${id}`)
  // } 

  // getAlbumPhotos(id: number): Observable<any> {
  //   return this.client.get(`${this.BASE_URL}/Article/${id}/photos`);
  // }

  getTotalItems() {
    return 150// this.client.get<number>(`${this.BASE_URL}/page-count`);
  }

  getArticleslist(category: string, page: number, pageSize: number): Observable<Article[]> {
    console.log(category)
    return this.client.get<Article[]>(`http://127.0.0.1:8000/api/category/${category}`);
    
    ///// ?&page=${page}&pageSize=${pageSize}`);
  }

  searchArticles(searchValue: string): Observable<Article[]> {
    return this.client.get<Article[]>(
      `http://127.0.0.1:8000/api/search/${searchValue}`
    );
  }
  //  createAlbum(newAlbum: Article): Observable<Article> {
  //   return this.client.post<Article>(`${this.BASE_URL}/Article`, newAlbum);
  // }

  // updateAlbum(id: number, updatedAlbum: Article): Observable<Article> {
  //   return this.client.put<Article>(`${this.BASE_URL}/Article/${id}`, updatedAlbum);
  // }

  // deleteAlbum(id: number): Observable<any> {
  //   return this.client.delete(`${this.BASE_URL}/Article/${id}`);
  // }

}