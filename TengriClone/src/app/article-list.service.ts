import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {
  BASE_URL = 'http://51.20.144.47:8000/api';
  constructor(private client: HttpClient) { }

  getArticleslist(category: string, page: number=1): Observable<Article[]> {
    if (page === 0) {
      page = 1;
    }
    return this.client.get<Article[]>(`${this.BASE_URL}/category/${category}/page/${page}`);
  }

  searchArticles(searchValue: string): Observable<Article[]> {
    return this.client.get<Article[]>(
      `${this.BASE_URL}/search/${searchValue}`
    );
  }

  findArticle(articleIdFromRoute: number): Observable<Article> {
    return this.client.get<Article>(
      `${this.BASE_URL}/article/${articleIdFromRoute}`
    );
  }

  count_pages(category: string, page: string): Observable<string> {
    if (page === '0') {
      page = '1';
    }
    return this.client.get<string>(
      `${this.BASE_URL}/${category}/page/${page}/get-pages`
    )
  }
}