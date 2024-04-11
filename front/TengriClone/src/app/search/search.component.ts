import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ArticleListService } from '../article-list.service';
import { Article } from '../models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  searchValue = '';
  articles: Article[] = [];



  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    private articlesService: ArticleListService,
    private route: ActivatedRoute, 
    private router: RouterModule,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    this.searchValue = String(routeParams.get('query')); // || 1;
    this.fetchData();
  }

  fetchData(): void {
    this.articlesService.searchArticles(this.searchValue).subscribe((articles) => {
      this.articles = articles;
    });
  }

  currentPage = 1;

  changePage(page: number): void {
    this.currentPage = page;
  }

}
