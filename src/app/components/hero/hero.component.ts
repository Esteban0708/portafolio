import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    gsap.from(".hero-title", {
      x: -100,
      opacity: 0,
      duration: 1
    });

    gsap.from(".hero-sub", {
      x: -100,
      opacity: 0,
      delay: 0.3,
      duration: 1
    });

    gsap.from(".hero-img", {
      x: 100,
      opacity: 0,
      duration: 1
    });

  }
}