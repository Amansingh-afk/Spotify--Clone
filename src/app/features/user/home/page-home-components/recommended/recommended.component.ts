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
    { title: 'Most Streamed', imgurl: 'assets/image/recommended/rec-music.jpeg'},
    { title: 'Most Streamed', imgurl: 'assets/image/recommended/rec-music.jpeg'},
    { title: 'Most Streamed', imgurl: 'assets/image/recommended/rec-music.jpeg'},
    { title: 'Most Streamed', imgurl: 'assets/image/recommended/rec-music.jpeg'},
    { title: 'Most Streamed', imgurl: 'assets/image/recommended/rec-music.jpeg'},
    { title: 'Most Streamed', imgurl: 'assets/image/recommended/rec-music.jpeg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
