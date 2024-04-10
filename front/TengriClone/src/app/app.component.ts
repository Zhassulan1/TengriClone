import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormBuilder } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { Article } from './models';
import { ArticleListService } from './article-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TopBarComponent, PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'TengriClone';
}
