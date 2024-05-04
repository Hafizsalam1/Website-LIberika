import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

    lottieOptions: AnimationOptions = {
    path: '../../assets/riset2.json', 
  };
  // @ViewChild('about') about!: ElementRef;

  // @HostListener('document:scroll', ['$event'])
  // public onScroll(){
  //   const windowHeight = window.innerHeight;

  //   const boundingRectFive = this.about.nativeElement.getBoundingClientRect();
  //     if(boundingRectFive.top >= 300){
  //       console.log(boundingRectFive.top + "MEONG");
  //       const nc = document.querySelector(`#title`) as HTMLElement;
  //       nc.style.opacity = "30%";
  //     }else{
  //       const nc = document.querySelector(`#title`) as HTMLElement;
  //       nc.style.opacity = "0%";
  //     }

    

  // }

}
