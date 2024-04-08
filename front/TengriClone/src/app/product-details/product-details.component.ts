import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Article, articles } from '../articles';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
}) 
export class ProductDetailsComponent implements OnInit {
  article: Article | undefined;


  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('articleId'));
    
    // Find the product that correspond with the id provided in route.
    this.article = articles.find(article => article.id === articleIdFromRoute);
  }

}
