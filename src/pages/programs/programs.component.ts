import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { NavigationExtras, Router } from '@angular/router';

import * as lottie from 'lottie-web';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
  }

  @ViewChild('lottie') lottie!: LottieComponent;

  lottieResearch: AnimationOptions = {
    path: '../../assets/research.json', 
    renderer: 'svg',
    loop: true,
    autoplay: false,
  };

  lottieBox: AnimationOptions = {
    path: '../../assets/box.json', 
    renderer: 'svg',
    loop: true,
    autoplay: false,
  };

  lottieMath: AnimationOptions = {
    path: '../../assets/math.json', 
    renderer: 'svg',
    loop: true,
    autoplay: false,
  };

  lottieLanguage: AnimationOptions = {
    path: '../../assets/language.json', 
    renderer: 'svg',
    loop: true,
    autoplay: false,
  };

  lottieWeb: AnimationOptions = {
    path: '../../assets/web.json', 
    renderer: 'svg',
    loop: true,
    autoplay: false,
  };
  private researchAnimation: any;
  private boxAnimation: any;
  private languageAnimation: any;
  private mathAnimation: any;
  private webAnimation: any;

  isResearchHovered: boolean = false;
  isBoxHovered: boolean = false;
  isLanguageHovered: boolean = false;
  isMathHovered: boolean = false;
  isWebHovered: boolean = false;


  animationCreated(animation: any, animationTitle: string) {
    switch(animationTitle){
      case "research":
        this.researchAnimation = animation;
        break;
      case "box":
        this.boxAnimation = animation;
        break;
      case "math":
        this.mathAnimation = animation;
        break;
      case "web":
        this.webAnimation = animation;
        break;
      case "language":
        this.languageAnimation = animation;
        break;    
      default:
        console.log("ERROR! There is no animation title like that!");
    }
  }

  onMouseEnter(animationTitle: string) {
    switch(animationTitle){
      case "research":
        if (this.researchAnimation) {
          this.researchAnimation.play();
        }
        this.isResearchHovered = true;
        break;
      case "box":
        if(this.boxAnimation){
          this.boxAnimation.play()
        }
        this.isBoxHovered = true;
        break;
      case "math":
          if(this.mathAnimation){
            this.mathAnimation.play()
          }
          this.isMathHovered = true;
          break;
      case "web":
          if(this.webAnimation){
            this.webAnimation.play()
          }
          this.isWebHovered = true;
          break;
      case "language":
         if(this.languageAnimation){
           this.languageAnimation.play()
          }
           this.isLanguageHovered = true;
          break;            
      default:
        console.log("ERROR! There is no animation title like that!");
    }

  }

  onMouseLeave(animationTitle: string) {
    switch(animationTitle){
      case "research":
        if (this.researchAnimation) {
          this.researchAnimation.stop();
        }
        this.isResearchHovered = false;
        break;
      case "box":
        if(this.boxAnimation){
          this.boxAnimation.stop()
        }
        this.isBoxHovered = false;
        break;

        case "math":
          if(this.mathAnimation){
            this.mathAnimation.stop()
          }
          this.isMathHovered = false;
          break;
       case "web":
          if(this.webAnimation){
            this.webAnimation.stop()
          }
          this.isWebHovered = false;
          break;
       case "language":
         if(this.languageAnimation){
           this.languageAnimation.stop()
          }
           this.isLanguageHovered = false;
          break;   
        default:
        console.log("ERROR! There is no animation title like that!");
    }
  }

  navigateToProgramDetail(programName: string): void {
    this.router.navigate(['/program-detail', programName]).then(() => {
      const scrollElement = this.document.documentElement || this.document.body;
      if (scrollElement) {
        const scrollToTop = () => {
          scrollElement.scrollTop = 0;
        };
  
        if ('scrollBehavior' in document.documentElement.style && navigator.userAgent.indexOf("Firefox") === -1) {
          // Use smooth scrolling if supported and not Firefox
          scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Fallback for browsers that do not support smooth scrolling or Firefox
          requestAnimationFrame(scrollToTop);
        }
      }
    });
  }
  
  

}
