import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-album',
  templateUrl: './popular-album.component.html',
  styleUrls: ['./popular-album.component.scss']
})
export class PopularAlbumComponent implements OnInit {
  cardInfo: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' }
  ];
  cardInfo2: Array<{ title: string, imgurl: string }> = [
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' },
    { title: 'Bollywood rock', imgurl: 'assets/image/hindi-party/bollywood-rock.jpeg' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
