import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'News', pathMatch: 'full' },
    { path: ':categoryName', component: ArticleListComponent },
    { path: ':TengriID', component: ArticleDetailsComponent },
    { path: ':categoryName/page/:pageNumber', component: ArticleListComponent },

    // {path: '**', redirectTo: 'News'},
];
