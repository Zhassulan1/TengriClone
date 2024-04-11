import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticleListService } from '../article-list.service';
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

  @Input() currentPage: any;
  @Input() currentCategory: any;
  paginationString: any;

  constructor(
    private articleListService: ArticleListService,
    private route: ActivatedRoute, 
    private router: RouterModule
  ) { 
  }
  
  
  ngOnInit(): void {    
    this.getPagesCount()
  }

  getPagesCount(){
    this.articleListService.count_pages(this.currentCategory, this.currentPage).subscribe((pagination) => {
      this.paginationString = '';
      this.paginationString = pagination;
    });
  }

  refresh(): void {
    window.location.reload();
  }
}
