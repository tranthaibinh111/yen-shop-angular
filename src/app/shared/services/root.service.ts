import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  path = '';

  constructor() { }

  product(id: number): any[] | string {
    return `${this.path}/san-pham/${id}`;
  }

  post(id:number): string {
    return `${this.path}/blog/bai-viet/${id}`;
  }

  url(url: string): string {
    return this.path + url;
  }
}
