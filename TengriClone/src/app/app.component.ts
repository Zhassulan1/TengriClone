import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormBuilder } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { Article } from './models';
import { ArticleListService } from './article-list.service';
import { ArticleListComponent } from "./article-list/article-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, TopBarComponent, PaginationComponent, ArticleListComponent]
})
export class AppComponent{
[x: string]: any;
  title = 'TengriClone';

  itemsPerPage = 10;
  currentPage = 1;
  
  constructor() { }




}
