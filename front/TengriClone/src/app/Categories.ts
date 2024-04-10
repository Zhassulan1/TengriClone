import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CurrentCategory {
  get_current(): Observable<string> {
    return new Observable<string>((observer) => {
      observer.next(CurrentCategory.current);
    });
  }
  static current = 'News'; 
  
}

export const Categories = [
  {
  name: 'news',
  img: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/hab/85054024613918.jpg?format=gallery-large'
  },
  {
    name: 'article',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h7a/64127646236702.jpg?format=preview-large'
  },
  {
    name: 'find-out',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-large'

  },
];