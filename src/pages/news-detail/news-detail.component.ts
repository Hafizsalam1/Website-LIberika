import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const newsTitle = params['newsTitle'];
    });
  }


  






}
