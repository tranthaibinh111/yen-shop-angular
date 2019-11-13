import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  path = '';

  constructor() { }

  product(slug: string): any[] | string {
    return `${this.path}/san-pham/${slug}`;
  }

  post(slug: string): string {
    return `${this.path}/blog/bai-viet/${slug}`;
  }

  url(url: string): string {
    return this.path + url;
  }
}
