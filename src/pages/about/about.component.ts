import { Component } from '@angular/core';
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

}
