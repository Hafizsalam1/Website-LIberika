import { Component, AfterViewInit, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2, private route: ActivatedRoute) { 
  }

  currentUrl: string = ""
  currentRouteParams: any;

  // private handleRouteNavigation(url: string): void {
  //   this.router.navigate([url]);
  // }

  // private isScrolling = false;
  

  private navigateTo(sectionId: string): void {
    const url = `/${sectionId}`;
    this.router.navigate([url]);
  }

  scrollAndNavigateTo(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      this.navigateTo(sectionId);
    }
  }




  isHoveredHome: boolean = false;
  isHoveredAbout: boolean = false;
  isHoveredContact: boolean = false;
  isHoveredProgram: boolean = false;
  isHoveredNews: boolean = false;


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


  checkurl(){

    const currentRouteState = this.router.routerState;
    const currentUrl = currentRouteState.snapshot.url;

  }


scrollToSection(sectionId: string): void {


  const currentRouteState = this.router.routerState;
  const currentUrl = currentRouteState.snapshot.url;


  if(currentUrl.includes("program-detail") || currentUrl.includes("news-detail")){

    this.router.navigate(['/home']).then(() => {
    
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        if(sectionId == "home"){
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if(sectionId == "about"){
          window.scrollTo({top: 900, behavior: 'smooth'});
        } else if(sectionId == "program"){
          window.scrollTo({top: 1900, behavior: 'smooth'});
        } else if(sectionId == "news"){
          window.scrollTo({top: 2900, behavior: 'smooth'})
        }
      }
    });

  }else{
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

  }


}

onMouseHover(section: string): void{
  if(section == "home"){
    this.isHoveredHome = true;
  }else if(section == "about"){
    this.isHoveredAbout = true;
  } else if(section == "contact"){
    this.isHoveredContact = true;
  }else if(section == 'program'){
    this.isHoveredProgram = true;
  } else if(section == 'news'){
    this.isHoveredNews = true;
  }
}


onMouseOffHover(section: string): void{
  if(section == "home"){
    this.isHoveredHome = false;
  } else if(section == "about"){
    this.isHoveredAbout = false;
  } else if(section == "contact"){
    this.isHoveredContact == false;
  } else if(section == 'program'){
    this.isHoveredProgram = false;
  } else if(section == 'news'){
    this.isHoveredNews = false;
  }

}

  
}

