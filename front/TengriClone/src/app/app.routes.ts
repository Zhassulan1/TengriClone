import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'News', pathMatch: 'full' },
    { path: ':categoryName', component: ArticleListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },

    // {path: '**', redirectTo: 'News'},
];
