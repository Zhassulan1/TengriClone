import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

import { Article } from '../models';

 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleListService } from '../article-list.service';
import { PaginationComponent } from '../pagination/pagination.component';


@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, PaginationComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  articles!: Article[];
  filteredArticleList!: Article[];
  categoryFromRoute!: string;
  currentPage!: number
  isLoaded = false;
  newArticle!: Article;

  constructor(
    private route: ActivatedRoute, 
    private router: RouterModule, 
    private articleListService: ArticleListService
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryFromRoute = String(routeParams.get('categoryName')).toLowerCase(); // || 'news';
    this.currentPage = Number(routeParams.get('page'))
    this.getArticles();
  }

  getArticles(){
    this.isLoaded = false;
    this.articleListService.getArticleslist(this.categoryFromRoute, this.currentPage).subscribe((article) => {
      this.articles = article;
      this.isLoaded = true;
    });
  }

  refresh(): void {
    window.location.reload();
  }

}
