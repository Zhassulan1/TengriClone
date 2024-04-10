import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticleListService } from '../article-list.service';
import { Subscription } from 'rxjs';
import { CurrentCategory } from '../Categories';
import { CategoryComponent } from '../category/category.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

export const ItemsPerPage = 20;

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, CategoryComponent, TopBarComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {

  pages: any[] = [];
  totalPages = 0;
  currentPage: string = '';
  totalItems = this.articleListService.getTotalItems();
  categoryFromRoute: string = '';
  
  constructor(
    private articleListService: ArticleListService,
    private route: ActivatedRoute, 
    private router: RouterModule
  ) { 
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / ItemsPerPage);
      this.pages = Array.from({length: this.totalPages}, (_, i) => i+1);
    }
  }
  
  
  ngOnInit(): void {        
    const routeParams = this.route.snapshot.paramMap;

    this.currentPage = String(routeParams.get('pageNumber')); // || 1;
    // console.log("category in pagination: " + this.categoryFromRoute);
    if (this.totalItems) {
        this.totalPages = Math.ceil(this.totalItems / ItemsPerPage);
        this.pages = Array.from({length: this.totalPages}, (_, i) => i+1);
      }
  }
    
  refresh(): void {
    this.categoryFromRoute = CurrentCategory.current;
    window.location.reload();
  }
}
