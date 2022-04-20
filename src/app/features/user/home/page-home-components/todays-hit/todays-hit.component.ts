import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-hit',
  templateUrl: './todays-hit.component.html',
  styleUrls: ['./todays-hit.component.scss']
})
export class TodaysHitComponent implements OnInit {
  cardData: Array<{ title: string, imgurl: string }> = [
    { title: 'Top Hits Hindi', imgurl: '' },
    { title: 'Top Hits Punjabi', imgurl: '' },
    { title: 'Top Hits English', imgurl: '' },
    { title: 'Hip Te Hop', imgurl: '' },
    { title: 'Punjabi Pop', imgurl: '' },
    { title: 'Happy Vibes', imgurl: '' }
  ];
  cardData2: Array<{ title: string, imgurl: string }> = [
    { title: 'Rap 91', imgurl: '' },
    { title: 'Party Chale On', imgurl: '' },
    { title: 'Filmy Hangover', imgurl: '' },
    { title: 'Safar Mix', imgurl: '' },
    { title: 'Metal Most Streamed', imgurl: '' },
    { title: 'PDM', imgurl: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
