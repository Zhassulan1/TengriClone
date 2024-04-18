import { Component, OnInit } from '@angular/core';
import { Categories } from '../Categories';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CurrentCategory } from '../Categories';
import { ArticleListService } from '../article-list.service';
import { Article } from '../models';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  categories = [...Categories];
  
  refresh(): void {
    window.location.reload();
  }

  searchValue = '';
  articles: Article[] = [];
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    private articlesService: ArticleListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.fetchData();
  }

  fetchData(): void {
    this.articlesService.searchArticles(this.searchValue).subscribe((articles) => {
      this.articles = articles;
    });
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
    this.refresh();
  }
}
