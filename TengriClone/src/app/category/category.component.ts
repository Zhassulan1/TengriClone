import { Component } from '@angular/core';
import { Categories } from '../Categories';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, PaginationComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  articleCategories = [...Categories];
}
