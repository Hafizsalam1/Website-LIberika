import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  currentImageIndex: number = 0;
  private subscription: Subscription = undefined as any;

  images: string[] = [
    'coverliberika1.jpeg',
    'liberika2.jpeg',
    'liberika3.jpeg'
  ];



  ngOnInit(): void {
    this.setBackgroundImage();
    this.startAutoExecution();
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setBackgroundImage();
  }

  previousImage(){
    if(this.currentImageIndex == 0){
      this.currentImageIndex = 2;
      this.setBackgroundImage();
    }else{
      this.currentImageIndex = (this.currentImageIndex -1) % this.images.length;
      this.setBackgroundImage();
    }
  }

  setBackgroundImage() {
    const imageUrl = this.images[this.currentImageIndex];
    const backgroundContainer = document.querySelector('.background-container') as HTMLElement;

    const circleProp1 = document.querySelector('.circle1') as HTMLElement;
    const circleProp2 = document.querySelector('.circle2') as HTMLElement;
    const circleProp3 = document.querySelector('.circle3') as HTMLElement;
    backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
    if(this.currentImageIndex == 0){
      circleProp1.style.backgroundColor = "white";
      circleProp2.style.backgroundColor = "grey";
      circleProp3.style.backgroundColor = "grey";
    }else if(this,this.currentImageIndex == 1){
      circleProp1.style.backgroundColor = "grey";
      circleProp2.style.backgroundColor = "white";
      circleProp3.style.backgroundColor = "grey";
    }else{
      circleProp1.style.backgroundColor = "grey";
      circleProp2.style.backgroundColor = "grey";
      circleProp3.style.backgroundColor = "white";
    }
  }

  startAutoExecution() {
    const intervalMilliseconds = 4 * 1000;

    this.subscription = interval(intervalMilliseconds).subscribe(() => {
      this.nextImage(); 
    });
  }

  stopAutoExecution() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.stopAutoExecution();
  }

  goToFirst(){
    this.currentImageIndex = 0;
    this.setBackgroundImage();
  }
  goToSecond(){
    this.currentImageIndex = 1;
    this.setBackgroundImage();
  }
  goToThird(){
    this.currentImageIndex = 2;
    this.setBackgroundImage();
  }

  lottieOptions: AnimationOptions = {
    path: '../../assets/scroll.json', 
  };




}
