import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/model/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  constructor(private router: Router) {}

  news: News[] = [{
    newsCode: '01',
    title: 'KONTINGEN LIBERIKA ACADEMY SAMBET 3 MEDALI EMAS DAN 2 MEDALI PERAK DI AJANG LOMBA INDONESIA INTERNATIONAL APPLIED SCIENCE PROJECT OLYMPIAD',
    picture: '../../assets/coverliberika1.jpg'

  }]

  onHover(): void{
    const nc = document.querySelector('.news-container') as HTMLElement;
    nc.style.height = "620px";
    nc.style.width = "410px";
  }

  offHover(): void{
    const nc = document.querySelector('.news-container') as HTMLElement;
    nc.style.height = "600px";
    nc.style.width = "400px";
  }

  navigateToNewsDetail(newsCode: string): void {
    this.router.navigate(['/news-detail'], { queryParams: { newsCode: newsCode } });
  }


}
