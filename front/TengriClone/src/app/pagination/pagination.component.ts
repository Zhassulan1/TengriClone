import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticleListService } from '../article-list.service';
import { Subscription } from 'rxjs';
import { CurrentCategory } from '../Categories';

export const ItemsPerPage = 20;

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {

  pages: number[] = [];
  totalPages = 0;
  @Input() currentPage: string = '';
  totalItems = this.articleListService.getTotalItems();
  @Input() category: string = '';
  
  // sub: Subscription;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(
    private articleListService: ArticleListService,
    // private route: ActivatedRoute, 
    private router: RouterModule
  ) { 
    const routeParams = this.route.snapshot.paramMap;
    this.currentPage = String(routeParams.get('pageNumber')); // || 1;
    this.category = String(routeParams.get('categoryName')); // || 'News';
    // alert(this.category);
    // alert(this.currentPage);
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / ItemsPerPage);
      this.pages = Array.from({length: this.totalPages}, (_, i) => i+1);
    }
  }
  
  
  ngOnInit(): void {    
    
    // const routeParams = this.route.snapshot.paramMap;
    // this.currentPage = String(routeParams.get('pageNumber')); // || 1;
    // this.category = String(routeParams.get('categoryName')); // || 'News';
    // alert(this.category);
    // alert(this.currentPage);
    // if (this.totalItems) {
    //   this.totalPages = Math.ceil(this.totalItems / ItemsPerPage);
    //   this.pages = Array.from({length: this.totalPages}, (_, i) => i+1);
    // }
  }


  refresh(): void {
    window.location.reload();
  }
}
