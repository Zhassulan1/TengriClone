import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'News', pathMatch: 'full' },
    { path: ':categoryName', component: ArticleListComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: ':categoryName/:TengriID', component: ArticleDetailsComponent },
    // { path: ':categoryName/page/:pageNumber', component: ArticleListComponent },
    // {path: '**', redirectTo: 'News'},
];
