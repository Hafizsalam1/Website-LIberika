import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/model/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent{

  choosenNews: News = {
    newsCode:'',
    title: '',
    picture:'',
    body:''
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const newsCode = params['newsCode'];
      this.news.forEach(ne => {
        if(ne?.newsCode == newsCode){
          this.choosenNews = ne;
        }
      });
    });
  }


  news: News[] = [{
    newsCode: '01',
    title: 'KONTINGEN LIBERIKA ACADEMY RAIH 3 MEDALI EMAS DAN 2 MEDALI PERAK DI AJANG LOMBA INDONESIA INTERNATIONAL APPLIED SCIENCE PROJECT OLYMPIAD',
    picture: '../../assets/coverliberika1.jpg',
    body:'Selasa - Jumat, 19 - 22 Desember 2023, Liberika Academy Indonesia telah mengirimkan perwakilan untuk mengikuti Lomba Indonesia International Applied Science Project Olympiad (IIASPO) yang diadakan oleh Departemen Aktuaria Institut Teknologi Sepuluh Nopember. Lomba ini diikuti oleh 17 negara dengan total tim mencapai 927 team. Prestasi yang diraih oleh para siswa Liberika Academy Indonesia merupakan bukti dari dedikasi, dan kerja keras siswa dan siswi dalam mengikuti lomba ini. Kami bangga atas pencapaian gemilang ini dan mengucapkan selamat kepada semua siswa yang telah berjuang keras dan memberikan yang terbaik dalam Lomba IIASPO. Atas prestasi yang membanggakan ini, Liberika Academy Indonesia berharap dapat terus memberikan dukungan dan motivasi kepada para siswa agar terus berkembang dan meraih prestasi di berbagai bidang.'
  }, {
    newsCode:'02',
    title:'KALEIDOSKOP LIBERIKA 2023',
    picture: '../../assets/kaleidoskop.jpeg'
  }]





  
  






}
