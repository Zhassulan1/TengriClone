import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Article } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleListService } from '../article-list.service';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
}) 
export class ArticleDetailsComponent implements OnInit {
    article!: Article;
    articleURL!: string;

    constructor(
        private route: ActivatedRoute,
        private articlesService: ArticleListService,
        private router: RouterModule,
    ) { }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('TengriID'));
    this.fetchData(articleIdFromRoute);
    this.articleURL = this.article.articleURL 
  }


  fetchData(articleIdFromRoute: number): void {
    this.articlesService.findArticle(articleIdFromRoute).subscribe((article) => {
      this.article = article;
    });
  }

}
