import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ArticleListService } from './article-list.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PaginationComponent } from './pagination/pagination.component';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    ArticleListService,
    TopBarComponent,
    PaginationComponent
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
