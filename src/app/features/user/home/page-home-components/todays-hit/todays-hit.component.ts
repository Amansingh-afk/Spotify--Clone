import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-hit',
  templateUrl: './todays-hit.component.html',
  styleUrls: ['./todays-hit.component.scss']
})
export class TodaysHitComponent implements OnInit {
  cardData: Array<{ title: string, imgurl: string }> = [
    { title: 'Top Hits Hindi', imgurl: 'assets/image/todays-hit/hits-hindi.jpeg' },
    { title: 'Top Hits Punjabi', imgurl: 'assets/image/todays-hit/punjabi-hits.jpeg' },
    { title: 'Trending Today', imgurl: 'assets/image/todays-hit/top-hits.jpeg' },
    { title: 'Top Hits Hindi', imgurl: 'assets/image/todays-hit/hits-hindi2.jpeg' }
  ];
  cardData2: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood Butter', imgurl: 'assets/image/todays-hit/bollywood-butter.jpeg' },
    { title: 'Punjabi Beats', imgurl: 'assets/image/todays-hit/punjabi-beats.jpeg' },
    { title: 'Trending', imgurl: 'assets/image/todays-hit/today-2.jpeg' },
    { title: 'Trending', imgurl: 'assets/image/todays-hit/today-1.jpeg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
