// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';


import { Article, articles } from '../articles';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
  
//   products: Product[] = [];
//   productCategoryFromRoute!: string;

//   constructor(private route: ActivatedRoute,
//     ) { }

//   ngOnInit() {
//     const routeParams = this.route.snapshot.paramMap;
//     this.productCategoryFromRoute = String(routeParams.get('productCategory')).toLowerCase();
  
//     this.products = products.filter(product => {
//       const match = product.category.toLowerCase() === this.productCategoryFromRoute;
//       if (!match) {
//         console.log('Mismatching product:', product);
//       }
//       return match;
//     });
//   }

//   onNotify() {
//     window.alert('You will be notified when the product goes on sale');
//   }

//   incrementLikes(product: Product) {
//     if (!product.liked) {
//       product.like += 1;
//       product.liked = true;
//     }else{
//       product.like -= 1;
//       product.liked = false;
//     }
//   }
// }
 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Categories } from '../Categories';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  // articleList = [...articles];
  articleList!: Article[];
  categoryFromRoute!: string;

  constructor(private route: ActivatedRoute, private router: RouterModule) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryFromRoute = String(routeParams.get('categoryName')).toLowerCase();

    this.articleList = articles.filter(article => {
      const match = article.category.toLowerCase() === this.categoryFromRoute;
      if (!match) {
        console.log('Mismatching article:', article);
      }
      return match;
    });
  }
}
// 