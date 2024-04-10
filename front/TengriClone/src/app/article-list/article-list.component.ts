import { ActivatedRoute, RouterModule } from '@angular/router';

import { Article } from '../models';

 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleListService } from '../article-list.service';

const ItemsPerPage = 20;

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  articles!: Article[];
  filteredArticleList!: Article[];
  categoryFromRoute!: string;
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

    this.getArticles();
    this.newArticle = {
        category: '',
        articleURL: '',
        TengriID: 0,
        title: '',
        announce: '',
        imgURL: '',
        pub_date: '',
        viewings: 0,
        comments: 0,
      }  
      
      this.articles = this.articles.filter(article => {
        const match = article.category.toLowerCase() === this.categoryFromRoute;
        console.log(article);
        return match;
      });
      // return this.articles
  }

  getArticles(){
    this.isLoaded = false;
    this.articleListService.getArticleslist(this.categoryFromRoute, 1, ItemsPerPage).subscribe((article) => {
      this.articles = article;
      this.isLoaded = true;
    });
  }
}
