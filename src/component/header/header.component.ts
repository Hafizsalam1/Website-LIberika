import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbarNav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn && navbarNav) {
      menuBtn.addEventListener('click', function () {
        navbarNav.classList.toggle('show');
      });

      navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
          navbarNav.classList.remove('show');
        });
      });


    }
  }

  


  navigateToSection(sectionId: string): void {
    this.router.navigate(['/about'], { fragment: sectionId });
}



  
}
