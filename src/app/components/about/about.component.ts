import { AfterViewInit, Component } from '@angular/core';
import { ScrollAnimationServiceTsService } from 'src/app/services/scroll-animation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  constructor(private scrollAnim: ScrollAnimationServiceTsService) {}

  ngAfterViewInit() {
    const els = document.querySelectorAll('#about .animate-on-scroll');
    this.scrollAnim.observe(els);
  }
}