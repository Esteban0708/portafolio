import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationServiceTsService } from '../../services/scroll-animation.service';

interface Project {
  title: string;
  description: string;
  tags: string[];
  images: string[];         // 👈 ahora es array
  confidential: boolean;
  demo?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  lightboxOpen = false;
  lightboxImg = '';
  projects: Project[] = [
    {
      title: 'Sistema de Citas',
      description: 'Aplicación web para agendar y gestionar citas de forma eficiente. Incluye calendario interactivo, notificaciones y gestión de disponibilidad.',
      tags: ['Angular', '.NET', 'SQL Server'],
      images: [
        'assets/citas1.png',
        'assets/citas2.png',
      ],
      confidential: false,
    },
    {
      title: 'App de Pedidos de Comida',
      description: 'Plataforma para realizar pedidos de comida en línea con carrito de compras, seguimiento de pedidos y panel de administración.',
      tags: ['Angular', 'C#', 'SQL Server'],
      images: [
        'assets/comida1.png',
        'assets/comida2.png',
        'assets/comida3.png',
        'assets/comida4.png',
        'assets/comida5.png'
      ],
      confidential: false,
      demo: 'https://pedircominada.netlify.app/',
    },
    {
      title: 'Módulo de Extensión y Proyección Social',
      description: 'Sistema institucional para la gestión del módulo de extensión y proyección social. Proyecto bajo acuerdo de confidencialidad.',
      tags: ['Angular', '.NET', 'Oracle'],
      images: [],
      confidential: true,
    },
    {
      title: 'Sistema de Inventario',
      description: 'Sistema de inventario para gestionar productos, costeo, ventas. Incluye reportes y alertas de bajo inventario.',
      tags: ['Angular', '.NET', 'SQL Server'],
      images: ['assets/Inventa1.png',
        'assets/Inventa2.png',
        'assets/Inventa3.png',
        'assets/Inventa4.png'
      ],
      confidential: false,
    }
  ];

  activeIndex: number[] = this.projects.map(() => 0);

  next(cardIndex: number) {
    const total = this.projects[cardIndex].images.length;
    this.activeIndex[cardIndex] = (this.activeIndex[cardIndex] + 1) % total;
  }

  prev(cardIndex: number) {
    const total = this.projects[cardIndex].images.length;
    this.activeIndex[cardIndex] = (this.activeIndex[cardIndex] - 1 + total) % total;
  }

  goTo(cardIndex: number, imgIndex: number) {
    this.activeIndex[cardIndex] = imgIndex;
  }

  constructor(private scrollAnim: ScrollAnimationServiceTsService) { }

  openLightbox(img: string) {
    this.lightboxImg = img;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }
  ngAfterViewInit() {
    const els = document.querySelectorAll('#projects .animate-on-scroll');
    this.scrollAnim.observe(els);
  }
}