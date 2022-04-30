import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-music',
  templateUrl: './new-music.component.html',
  styleUrls: ['./new-music.component.scss']
})
export class NewMusicComponent implements OnInit {
  cardInfo: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' }
  ];
  cardInfo2: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
