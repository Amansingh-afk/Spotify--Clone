import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hindi-party',
  templateUrl: './hindi-party.component.html',
  styleUrls: ['./hindi-party.component.scss']
})
export class HindiPartyComponent implements OnInit {
  cardInfo: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood Butter', imgurl: 'assets/image/hindi-party/bollywood-butter3.jpeg' },
    { title: 'Bollywood Serotonin', imgurl: 'assets/image/hindi-party/serotonin.jpeg' },
    { title: 'Top Hits', imgurl: 'assets/image/hindi-party/bollywood-hits.jpeg' }
  ];
  cardInfo2: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood Romance',  imgurl: 'assets/image/hindi-party/bollywood-romance.jpeg' },
    { title: 'Bollywood Dance Music', imgurl: 'assets/image/hindi-party/bollywood-itemsongs.jpeg' },
    { title: 'Bollywood Sufi', imgurl: 'assets/image/hindi-party/bollywood-sufi.jpeg' },
    { title: 'Hidden Gems', imgurl: 'assets/image/hindi-party/hidden-gems.jpg' }

  ];
  constructor() { }
  ngOnInit(): void {
  }

}
