import { Component } from '@angular/core';
import { Categories } from '../Categories';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentCategory } from '../Categories';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  categories = [...Categories];
  
  refresh(category: any): void {
    window.location.reload();
    CurrentCategory.current = category;
  }

  setCategory(category: string) {
    // CurrentCategory.Set(category);
  }
  
  formSubmitted() {
    alert("Form Submitted");
    const name = document.getElementById("name")?.innerHTML;
    alert(name);
  }
  
}
