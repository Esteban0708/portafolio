import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationServiceTsService {

  constructor() { }
 observe(elements: NodeListOf<Element> | Element[]) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  }
}
