import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { LandingPageComponent } from 'src/pages/landing-page/landing-page.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'website-liberika';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }


}
