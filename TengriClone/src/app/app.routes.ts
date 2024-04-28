import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'feed/News', pathMatch: 'full' },
    { path: 'feed/:categoryName', component: ArticleListComponent },
    { path: 'feed/search/:query', component: SearchComponent },
    { path: 'feed/:categoryName/:TengriID', component: ArticleDetailsComponent },
    { path: 'feed/:categoryName/page/:page', component: ArticleListComponent},
    // {path: '**', redirectTo: 'feed/News'},
];
