import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Program } from 'src/model/program.model';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css'
})
export class ProgramDetailComponent implements OnInit {

  programName: string = "";
  choosenProgram: Program = {
    programCode:'',
    animation:''
  };

  research: Program = {
    programCode:'research',
    title: "Sains dan Riset",
    description:"Science and research merupakan program untuk mendukung pengembangan kreativitas peserta didik dibidang science dan research. Materi yang diajarkan meliputi pengembangan robotik, pengembangan energi baru terbarukan, pengembangan biomedis, dan pengembangan teknologi. ",
    price:200000,
    animation:''
  }

  math = {
    programCode:'math',
    title: "Matematika",
    description:"Matematika merupakan program untuk meningkatkan kemampuan dalam berfikir dan mengerjakan matematika.",
    price:200000,
    animation:''
  }

  box = {
    programCode:'box',
    title: "Taekwondo",
    description:"Taekwondo merupakan kursus bela diri untuk mendukung siswa dalam menjaga diri dari orang jahat. Materi yang akan diajarkan meliputi kekuatan fisik, kelenturan dan materi beladiri.  ",
    price:200000,
    animation:''
  }

  language = {
    programCode:'language',
    title: "Bahasa Inggris",
    description:"Bahasa Inggris merupakan program peningkatan kemampuan bwrbahasa Inggris. Materi yang akan diajarkan meliputi Speaking conversation, grammar dan speaking presentasi.",
    price:200000,
    animation:''
  }

  web = {
    programCode:'web',
    title: "Web",
    description:"Website development merupakan program untuk mengembangkan siswa didik kami dalam bidang IoT sehingga memudahkan untuk mempersiapkan diri menuju social Society.",
    price:200000,
    animation:''
  }



  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.programName = params['name']; 
    });

    if(this.programName == "research"){
      this.choosenProgram = this.research;
    } else if(this.programName == "box"){
      this.choosenProgram = this.box;
    } else if(this.programName == "web"){
      this.choosenProgram = this.web;
    } else if(this.programName == "math"){
      this.choosenProgram = this.math;
    } else if(this.programName == "language"){
      this.choosenProgram = this.language;
    }
  }
  



  






}
