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
    { title: 'Bollywood Dance Music', imgurl: 'assets/image/hindi-party/bollywood-itemsongs.jpeg' },
    { title: 'Bollywood Serotonin', imgurl: 'assets/image/hindi-party/serotonin.jpeg' },
    { title: 'Top Hits', imgurl: 'assets/image/hindi-party/bollywood-hits.jpeg' },
    { title: 'Bollywood Sufi', imgurl: 'assets/image/hindi-party/bollywood-sufi.jpeg' }
  ];
  cardInfo2: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood Romance',  imgurl: 'assets/image/hindi-party/bollywood-romance.jpeg' },
    { title: 'All out 00s Hindi', imgurl: 'assets/image/hindi-party/00s-hindi.jpeg' },
    { title: 'Workout Beast Mode', imgurl: 'assets/image/hindi-party/workout5.jpeg'},
    { title: 'Hidden Gems', imgurl: 'assets/image/hindi-party/hidden-gems.jpg' },
    { title: 'Bollywood Sundowner', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVVamIRlLPRaUkHX9KZ8BIZ7pzPXkgN2Sty6T6guG3v3M5hb8M5ptbDcy0haFjSoOVzo&usqp=CAU' },
    { title: 'Car Party', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_Dg_4HqJKcMnfcUFA6ng16SHHNUvYCrh6Q&usqp=CAU' }

  ];
  constructor() { }
  ngOnInit(): void {
  }

}
