import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {
  cardInfo: Array<{ title: string, imgurl: string }> = [
    { title: 'Most Streamed', imgurl: 'assets/image/recommended/rec-music.jpeg'},
    { title: 'Rap Hits', imgurl: 'assets/image/recommended/rap-nation.jpeg'},
    { title: 'Top Beats', imgurl: 'assets/image/recommended/rec-beats.jpeg'},
    { title: 'Desi Hip Hop', imgurl: 'assets/image/recommended/rec-hiphop.jpeg'},
    { title: 'Brain f*3k', imgurl: 'assets/image/recommended/brain-food.jpeg'},
    { title: 'Dance Party', imgurl: 'assets/image/recommended/dance-party.jpeg'},
  ];
  cardInfo2: Array<{ title: string, imgurl: string }> = [
    { title: 'New Music Hindi', imgurl: "https://assets.tonica.la/__export/1537306689555/sites/debate/img/2018/09/18/maxresdefault_x1x.jpg_1359985867.jpg" },
    { title: 'All out 00s Hindi', imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzTMWHYcsRg1yNX5U94GrRURBIY9NvqDVzw&usqp=CAU" },
    { title: 'Top Hits Hindi', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC6nTjNcLCUSFL4Ezzvb19QxkUD-NUF-e-A&usqp=CAU' },
    { title: 'Hindi Chill Songs', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuP59b-oI_GnFhrF3na30mAJKQaxp7oYWgg3OyJhiizQhCOSSgQuDqoDoFb6tSYBHerA&usqp=CAU' },
    { title: 'Bollywood Sundowner', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVVamIRlLPRaUkHX9KZ8BIZ7pzPXkgN2Sty6T6guG3v3M5hb8M5ptbDcy0haFjSoOVzo&usqp=CAU' },
    { title: 'Car Party', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_Dg_4HqJKcMnfcUFA6ng16SHHNUvYCrh6Q&usqp=CAU' }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
