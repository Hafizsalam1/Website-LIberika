import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { NavigationExtras, Router } from '@angular/router';

import * as lottie from 'lottie-web';
import { DOCUMENT } from '@angular/common';
import { Program } from 'src/model/program.model';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
  }

  @ViewChild('lottie') lottie!: LottieComponent;

  lottieReserach: AnimationOptions = {
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


  programs: Program[] =[
    {
      programCode:'research',
      title: "Sains dan Riset",
      description:"Science and research merupakan program untuk mendukung pengembangan kreativitas peserta didik dibidang science dan research. Materi yang diajarkan meliputi pengembangan robotik, pengembangan energi baru terbarukan, pengembangan biomedis, dan pengembangan teknologi. ",
      price:200000,
      animation: this.lottieReserach
    },
  
    {
      programCode:'math',
      title: "Matematika",
      description:"Matematika merupakan program untuk meningkatkan kemampuan dalam berfikir dan mengerjakan matematika.",
      price:200000,
      animation: this.lottieMath
    },
  
    {
      programCode:'box',
      title: "Taekwondo",
      description:"Taekwondo merupakan kursus bela diri untuk mendukung siswa dalam menjaga diri dari orang jahat. Materi yang akan diajarkan meliputi kekuatan fisik, kelenturan dan materi beladiri.  ",
      price:200000,
      animation: this.lottieBox
    },
  
    {
      programCode:'language',
      title: "Bahasa Inggris",
      description:"Bahasa Inggris merupakan program peningkatan kemampuan bwrbahasa Inggris. Materi yang akan diajarkan meliputi Speaking conversation, grammar dan speaking presentasi.",
      price:200000,
      animation: this.lottieLanguage
    },
  
    {
      programCode:'web',
      title: "Web",
      description:"Website development merupakan program untuk mengembangkan siswa didik kami dalam bidang IoT sehingga memudahkan untuk mempersiapkan diri menuju social Society.",
      price:200000,
      animation: this.lottieWeb
    }
  ] 



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
    const nc = document.querySelector(`#program-${animationTitle}`) as HTMLElement;
    nc.style.backgroundColor = "blueviolet";
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
    const nc = document.querySelector(`#program-${animationTitle}`) as HTMLElement;
    nc.style.backgroundColor = "rgb(6, 39, 128)"
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
          scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          requestAnimationFrame(scrollToTop);
        }
      }
    });
  }
  

}
