import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      gsap.from(".menu li", {
        y: 20,
        opacity: 0,
        stagger: 0.1
      });
    }
  }

  ngAfterViewInit(): void {
    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      duration: 1
    });
  }
}